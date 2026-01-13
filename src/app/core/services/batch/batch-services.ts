import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { GlobalConstant } from '../../constants/Global.constant';
import { BatchModel } from '../../models/classes/Batch.Model';
import { Observable } from 'rxjs';
import { IAPIResponse } from '../../models/interfaces/Common.Model';

@Injectable({
  providedIn: 'root',
})
export class BatchServices {

  http = inject(HttpClient);

  getAllBatchService():Observable<IAPIResponse>{
    return this.http.get<IAPIResponse>(environment.API_URL + GlobalConstant.API_END_POINTS.BATCHES);
  }

  addBatchService(obj:BatchModel):Observable<IAPIResponse>{
    return this.http.post<IAPIResponse>(environment.API_URL + GlobalConstant.API_END_POINTS.BATCHES,obj)
  }
  getBatchByIdService(item:BatchModel){
    return this.http.get<IAPIResponse>(environment.API_URL + GlobalConstant.API_END_POINTS.BATCHES+'/'+item.batchId);
  }
  updateBatchService(obj:BatchModel):Observable<IAPIResponse>{
    return this.http.put<IAPIResponse>(environment.API_URL + GlobalConstant.API_END_POINTS.BATCHES+'/'+obj.batchId,obj)
  }
  deleteBatchService(id:number):Observable<IAPIResponse>{
    return this.http.delete<IAPIResponse>(environment.API_URL + GlobalConstant.API_END_POINTS.BATCHES+'/'+id)
  }
}
