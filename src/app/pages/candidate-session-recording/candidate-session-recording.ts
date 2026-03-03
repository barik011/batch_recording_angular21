import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserServices } from '../../core/services/user/user-services';
import { CandidateModel } from '../../core/models/classes/Candidate.Model';
import { BatchServices } from '../../core/services/batch/batch-services';
import { EnrollmentServices } from '../../core/services/enrollment/enrollment-services';
import { map } from 'rxjs';
import { SessionRecordServices } from '../../core/services/sessions/session-record-services';

@Component({
  selector: 'app-candidate-session-recording',
  imports: [],
  templateUrl: './candidate-session-recording.html',
  styleUrl: './candidate-session-recording.css',
})
export class CandidateSessionRecording implements OnInit {
  userSrv = inject(UserServices);
  enrolledBatchServ = inject(EnrollmentServices);
  sessionRecordServ = inject(SessionRecordServices);
  /** sanitizer needed to bypass security for iframe URLs */
  sanitizer = inject(DomSanitizer);
  enrolledBatch=signal<any[]>([]);
  sessionRecord= signal<any[]>([]);
  /**
   * YouTube iframe requires a trusted resource URL in Angular
   * and the raw video id needs to be converted into an embed URL.
   */
  videoUrl: SafeResourceUrl | null = null;

  @ViewChild('videoModal') videoModalRef!:ElementRef;

  constructor(){   
     this.userSrv.loggedDataBehSub$.subscribe({
      next:(res)=>{
        this.getEnrolmentByCandidate(res.candidateId)
      }
    })
    
     
  }
  ngOnInit(): void {
  }

  getEnrolmentByCandidate(candidateID:number){
    debugger;
    this.enrolledBatchServ.getBatchedEnrolledByCandidateId(candidateID).subscribe({
      next:(result:any)=>{
        debugger;
        this.enrolledBatch.set(result.data);
      },
      error:(err:any)=>{
        alert('Some Issue on Batch Enrolment');
      }
    })
  }

  sessionRecording(id:number){
    debugger;
    this.sessionRecordServ.getAllSessionRecordByBatchIdServ(id).subscribe({
      next:(res:any)=>{
        debugger;
        this.sessionRecord.set(res.data);
      }
    })
  }

  openVideoModal(url:string){
    debugger;
    const embed = this.extractYoutubeId(url);
    if (!embed) {
    alert('Invalid YouTube link – cannot play video');
    return;
  }
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${embed}`);

    // show modal
    this.videoModalRef.nativeElement.style.display = 'block';
    this.videoModalRef.nativeElement.style.opacity = 1;
    
  }
  getVideoId(url:string):string{
    return url.split('v=')[1]?.split('&')[0];
  }
 private extractYoutubeId(url: string): string | null {
  // covers watch?v=, youtu.be/, embed/, etc.
  const regExp =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}
  closeVideoModal(){
    // hide modal
    this.videoModalRef.nativeElement.style.display = 'none';
    this.videoModalRef.nativeElement.style.opacity = 0;
    // clear the URL to stop playback
    this.videoUrl = null;
  }
}
