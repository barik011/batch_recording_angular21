export class BatchModel {
      batchId:number=0;
      batchName:string='';
      description:string='';
      startDate:Date=new Date();
      endDate:Date=new Date();
      isActive:boolean=false;
      createdAt:Date=new Date();
      updatedAt:Date=new Date();

      // constructor(){
      //   this.batchId=0,
      //   this.batchName='',
      //   this.description='',
      //   this.startDate=new Date(),
      //   this.endDate=new Date(),
      //   this.isActive=false,
      //   this.createdAt=new Date(),
      //   this.updatedAt=new Date()
      // }
}