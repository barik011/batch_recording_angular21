export class BatchModel {
      batchId:number;
      batchName:string;
      description:string;
      startDate:Date;
      endDate:Date;
      isActive:boolean;
      createdAt:Date;
      updatedAt:Date;

      constructor(){
        this.batchId=0,
        this.batchName='',
        this.description='',
        this.startDate=new Date(),
        this.endDate=new Date(),
        this.isActive=false,
        this.createdAt=new Date(),
        this.updatedAt=new Date()
      }
}