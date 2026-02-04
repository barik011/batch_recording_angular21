import { Component, inject } from '@angular/core';
import { UserServices } from '../../core/services/user/user-services';
import { CandidateModel } from '../../core/models/classes/Candidate.Model';
import { BatchServices } from '../../core/services/batch/batch-services';
import { EnrollmentServices } from '../../core/services/enrollment/enrollment-services';

@Component({
  selector: 'app-candidate-session-recording',
  imports: [],
  templateUrl: './candidate-session-recording.html',
  styleUrl: './candidate-session-recording.css',
})
export class CandidateSessionRecording {
  userLoggedSrv = inject(UserServices);
  enrolledBatchServ = inject(EnrollmentServices);

  constructor(){
    const loggedData = this.userLoggedSrv.currentLoggedData()
  }

  getEnrolmentByCandidate(){
    this.enrolledBatchServ.getBatchedEnrolledByCandidateId(this.loggedData.c)
  }
}
