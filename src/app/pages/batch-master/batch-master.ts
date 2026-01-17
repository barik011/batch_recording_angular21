import { JsonPipe, NgClass, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, Pipe, signal, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { GlobalConstant } from '../../core/constants/Global.constant';
import { FormsModule } from '@angular/forms';
import { BatchServices } from '../../core/services/batch/batch-services';
import { BatchModel } from '../../core/models/classes/Batch.Model';
import { IAPIResponse } from '../../core/models/interfaces/Common.Model';


@Component({
  selector: 'app-batch-master',
  imports: [FormsModule, NgClass,JsonPipe,NgIf],
  templateUrl: './batch-master.html',
  styleUrl: './batch-master.css',
})
export class BatchMaster implements OnInit {
  
  @ViewChild('batchModal') batchModal!:ElementRef;
  toggleView:boolean=true;
  batchList = signal<any[]>([]);
  batchID = signal<any>({});
  http = inject(HttpClient);
  batchServ = inject(BatchServices);

  newBatchObj: BatchModel= new BatchModel() 

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
    //this.newBatchObj = new BatchModel();
  }
  resetForm(){
    this.newBatchObj = new BatchModel();
  }
  loadAllBatches(){
    debugger;
    this.batchServ.getAllBatchService().subscribe({
      next:(result:any)=>{
        this.batchList.set(result.data);
      },
      error:(err:any)=>{
        alert(err.error.message);
      }
    })
  }
  onSaveBatch(){
    this.batchServ.addBatchService(this.newBatchObj).subscribe({
      next:(result:IAPIResponse)=>{
        debugger;
        this.batchList.set(result.data);
        alert(result.message);
        this.resetForm();
        this.closeModal();
        this.loadAllBatches();        
      },
      error:(err:IAPIResponse)=>{
        alert(err.message);
      }
    })
  }

  onEditBatch(item:BatchModel){
    debugger;
    this.openModal();
    this.newBatchObj = item;
    this.batchServ.getBatchByIdService(item).subscribe({
      next:(result:IAPIResponse)=>{
        debugger;
        this.newBatchObj = result.data
        //Object.assign(this.newBatchObj, result.data);
        this.batchID.set(result.data.batchId);
        this.openModal();
      },
      error:(err:IAPIResponse)=>{
        alert(err.message);
      }
    })
  }
  updateBatchById(){
    this.batchServ.updateBatchService(this.newBatchObj).subscribe({
      next:(result:IAPIResponse)=>{
        debugger;
        this.batchList.set(result.data);
        alert(result.message);
        this.resetForm();
        this.closeModal(); 
        this.loadAllBatches();   
      },
      error:(err:IAPIResponse)=>{
        alert(err.message);
      }
    })
  }


  onDeleteBatch(id:number){
    this.batchServ.deleteBatchService(id).subscribe({
      next:(result:IAPIResponse)=>{
        alert('batch deleted')
      },
       error:(err:IAPIResponse)=>{
        alert(err.message);
      }
    })
  }
}
