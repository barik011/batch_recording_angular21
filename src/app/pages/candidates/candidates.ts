import { NgClass } from '@angular/common';
import { Component, ElementRef, inject, OnInit, signal, ViewChild, viewChild } from '@angular/core';
import { CandidateServices } from '../../core/services/candidate/candidate-services';
import { CandidateModel } from '../../core/models/classes/Candidate.Model';
import { IAPIResponse } from '../../core/models/interfaces/Common.Model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidates',
  imports: [NgClass,FormsModule,ReactiveFormsModule],
  templateUrl: './candidates.html',
  styleUrl: './candidates.css',
})
export class Candidates implements OnInit {

@ViewChild('candidateModal') candidateModal!:ElementRef;
toggleView:boolean=false;
candidateList= signal<CandidateModel[]>([])
candServ = inject(CandidateServices);
newCandidatehObj:FormGroup = new FormGroup({});

constructor(){
  this.candicateForm();
}


ngOnInit(): void {
  this.loadCandidates();
}

candicateForm(){
  this.newCandidatehObj = new FormGroup({
        candidateId:new FormControl(0),
        fullName:new FormControl('',[Validators.required,Validators.minLength(4)]),
        email:new FormControl('',[Validators.required,Validators.pattern('^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$')]),
        mobileNumber:new FormControl('',[Validators.required,Validators.pattern('^[6-9]\d{9}$')]),
        password:new FormControl(''),
        role:new FormControl('',[Validators.required]),
        isActive:new FormControl(false),
        createdAt:new FormControl(new Date()),
        updatedAt:new FormControl(new Date())
  })
}
  
  loadCandidates(){
    this.candServ.getAllCandidateServ().subscribe({
      next:(result:IAPIResponse)=>{
        this.candidateList.set(result.data)
      },
      error:(err:IAPIResponse)=>{
        alert(err.message);
      }
    })
  }


  onSaveCandidate(){
    debugger
    const formValue = this.newCandidatehObj.value;
    this.candServ.addCandidateServ(formValue).subscribe({
      next:(result:IAPIResponse)=>{
        alert('Candidate Created')
        this.loadCandidates();
      },
      error:(err:IAPIResponse)=>{
        alert('Some Issue on API Please Check')
      }
    })
  }

  onEditCandidate(id:number){
    this.candServ.getCandidateByIdServ(id).subscribe({
      next:(result:IAPIResponse)=>{
        this.newCandidatehObj.patchValue(result.data);
        this.openModal();
      },
      error:(err:IAPIResponse)=>{
        alert('Some API issue');
      }
    })
  }

  onUpdateCandidate(){
    const formValue = this.newCandidatehObj.value;
    this.candServ.updateCandidateServ(formValue).subscribe({
      next:(result:IAPIResponse)=>{
        alert(result.message);
        this.closeModal();
        this.loadCandidates();
      },
      error:(err:IAPIResponse)=>{
        alert(err.message)
      }
    })
  }
onDeleteCandidate(id:number){
  const isDelete = confirm('Are you sure to delete!');
  if(isDelete){
    this.candServ.deleteCandidateServ(id).subscribe({
      next:(result:IAPIResponse)=>{
        this.loadCandidates();
      },
      error:(err:IAPIResponse)=>{
        alert('Some API issue');
      }
    })
  }
  
}
openModal(){
    this.candidateModal.nativeElement.style.display='block';
  }
  closeModal(){
    this.candidateModal.nativeElement.style.display='none';
  }
  onToggleView(){
    this.toggleView = !this.toggleView;
  }


}
