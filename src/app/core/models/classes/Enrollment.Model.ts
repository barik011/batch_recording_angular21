export class EnrollmentModel {
      enrollmentId:number;
      batchId:number;
      candidateId:number;
      enrollmentDate: string;
      isActive: boolean;

      constructor(){
        this.enrollmentId=0,
        this.batchId=0,
        this.candidateId=0,
        this.enrollmentDate='',
        this.isActive=false
      }
}