import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { EnrollmentServices } from '../../core/services/enrollment/enrollment-services';
import { IAPIResponse } from '../../core/models/interfaces/Common.Model';
import { NgClass } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BatchServices } from '../../core/services/batch/batch-services';
import { CandidateServices } from '../../core/services/candidate/candidate-services';

@Component({
  selector: 'app-batch-enrollments',
  imports: [NgClass,ReactiveFormsModule],
  templateUrl: './batch-enrollments.html',
  styleUrl: './batch-enrollments.css',
})
export class BatchEnrollments implements OnInit {
  @ViewChild('candidateModal') candidateModal!:ElementRef;
  toggleView:boolean=false;
  batchEnrollmentList=signal<any[]>([]);
  batchList=signal<any[]>([]);
  candidateList=signal<any[]>([])
  enrollServ = inject(EnrollmentServices);
  batchServ = inject(BatchServices);
  candidateServ = inject(CandidateServices);
  newEnrollmentObj:FormGroup = new FormGroup({});

constructor(){
  this.enrollmentForm();
}

enrollmentForm(){
  this.newEnrollmentObj = new FormGroup({
        enrollmentId: new FormControl(0),
        batchId : new FormControl(0),
        candidateId :new FormControl(0),
        enrollmentDate: new FormControl(new Date()),
        isActive :new FormControl(false) 
  })
}

ngOnInit(): void {
  this.loadBatchEnrollment();
  this.loadBatchs();
  this.loadCandidates()
}


loadBatchs(){
  this.batchServ.getAllBatchService().subscribe({
    next:(result:IAPIResponse)=>{
      this.batchList.set(result.data)
    }
  })
}
loadCandidates(){
  this.candidateServ.getAllCandidateServ().subscribe({
    next:(result:IAPIResponse)=>{
      this.candidateList.set(result.data)
    }
  })
}
  loadBatchEnrollment(){
    debugger;
    this.enrollServ.getAllEnrollmentServ().subscribe({
      next:(result:IAPIResponse)=>{
        this.batchEnrollmentList.set(result.data)
      },
      error:(err:IAPIResponse)=>{
        alert(err.message)
      }
    })
  }

  onSaveEnrollment(){
    debugger
    const formValue = this.newEnrollmentObj.value;
    this.enrollServ.addEnrollmentServ(formValue).subscribe({
      next:(result:IAPIResponse)=>{
        alert('Enrollment Created')
        this.loadBatchEnrollment();
      },
      error:(err:IAPIResponse)=>{
        alert('Some Issue on API Please Check')
      }
    })
  }

  onEditEnrollment(id:number){
    this.enrollServ.getEnrollmentByIdServ(id).subscribe({
      next:(result:IAPIResponse)=>{
        this.newEnrollmentObj.patchValue(result.data);
        this.openModal();
      },
      error:(err:IAPIResponse)=>{
        alert(err.message)
      }
    })
  }

onUpdateEnrollment(){
    debugger
    const formValue = this.newEnrollmentObj.value;
    this.enrollServ.addEnrollmentServ(formValue).subscribe({
      next:(result:IAPIResponse)=>{
        alert('Enrollment Created')
        this.loadBatchEnrollment();
      },
      error:(err:IAPIResponse)=>{
        alert('Some Issue on API Please Check')
      }
    })
  }

  openModal(){
    debugger;
      this.candidateModal.nativeElement.style.display='block';
  }
  closeModal(){
    this.enrollmentForm();
    this.candidateModal.nativeElement.style.display='none';
  }
  onToggleView(){
    this.toggleView = !this.toggleView;
  }
}
