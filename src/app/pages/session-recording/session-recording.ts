import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { IGetSeesion, ISession } from '../../core/models/interfaces/Sessions.Model';
import { SessionRecordServices } from '../../core/services/sessions/session-record-services';
import { IAPIResponse } from '../../core/models/interfaces/Common.Model';
import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { BatchServices } from '../../core/services/batch/batch-services';
import { map, Observable } from 'rxjs';
import { BatchModel } from '../../core/models/classes/Batch.Model';
import { form, minLength, required, schema, validate, Field } from '@angular/forms/signals';

@Component({
  selector: 'app-session-recording',
  imports: [NgClass, AsyncPipe, Field],
  templateUrl: './session-recording.html',
  styleUrl: './session-recording.css',
})
export class SessionRecording implements OnInit {
  @ViewChild('candidateModal') candidateModal!: ElementRef;
  toggleView: boolean = true;
  sessionRecordList = signal<IGetSeesion[]>([]);
  sessionServ = inject(SessionRecordServices);

  batchSrv = inject(BatchServices);
  batchList$: Observable<BatchModel[]> = new Observable<BatchModel[]>();

  newSessionRecord = signal<ISession>({
    sessionId: 0,
    batchId: 0,
    topicName: '',
    topicDescription: '',
    youtubeVideoId: '',
    durationInMinutes: '',
    sessionDate: '',
    displayOrder: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  sessionForm = form(this.newSessionRecord,(schema)=>{
    required(schema.batchId,{message:'This field is required'}),
    required(schema.topicName,{message:'This field is required'}),
    required(schema.topicDescription,{message:'This field is required'}),
    minLength(schema.topicDescription,10,{message:'Min length 10 required'})
  })

  constructor() {
    this.batchList$ = this.batchSrv.getAllBatchService().pipe(map((rep: IAPIResponse) => rep.data));
  }

  ngOnInit(): void {
    this.loadSessionRecord();
  }

  loadSessionRecord() {
    this.sessionServ.getAllSessionRecordServ().subscribe({
      next: (res: IAPIResponse) => {
        debugger;
        this.sessionRecordList.set(res.data);
      },
      error: (err: IAPIResponse) => {
        alert(err.message);
      },
    });
  }

  onSaveSessionRecord(){
    alert('Hi')
    debugger;
    const formValue=this.sessionForm().value();
    
  }

  openModal() {
    this.candidateModal.nativeElement.style.display = 'block';
  }
  closeModal() {
    this.candidateModal.nativeElement.style.display = 'none';
  }
  onToggleView() {
    this.toggleView = !this.toggleView;
  }
}
