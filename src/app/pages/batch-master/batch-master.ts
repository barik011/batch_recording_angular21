import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { GlobalConstant } from '../../core/constants/Global.constant';


@Component({
  selector: 'app-batch-master',
  imports: [NgClass],
  templateUrl: './batch-master.html',
  styleUrl: './batch-master.css',
})
export class BatchMaster implements OnInit {
  
  @ViewChild('batchModal') batchModal!:ElementRef;
  toggleView:boolean=true;
  batchList = signal<any[]>([]);
  http = inject(HttpClient);

  newBatchObj:any={
      batchId: 0,
      batchName: "",
      description: "",
      startDate: "",
      endDate: "",
      isActive: true,
      createdAt: "",
      updatedAt: ""
  }
  ngOnInit(): void {
    this.loadAllBatches();
  }
  onToggleView(){
    this.toggleView = !this.toggleView;
  }
  openModal(){
    this.batchModal.nativeElement.style.display = 'block';
  }
  closeModal(){
    this.batchModal.nativeElement.style.display = 'none';
  }

  loadAllBatches(){
    debugger;
    this.http.get(environment.API_URL + GlobalConstant.API_END_POINTS.BATCHES).subscribe({
      next:(result:any)=>{
        this.batchList.set(result.data);
      },
      error:(err:any)=>{
        alert(err.error.message);
      }
    })
  }

}
