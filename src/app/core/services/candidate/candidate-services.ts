import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { GlobalConstant } from '../../constants/Global.constant';
import { Observable } from 'rxjs';
import { CandidateModel } from '../../models/classes/Candidate.Model';
import { IAPIResponse } from '../../models/interfaces/Common.Model';

@Injectable({
  providedIn: 'root',
})
export class CandidateServices {

  http = inject(HttpClient);

  getAllCandidateServ():Observable<IAPIResponse>{
    return this.http.get<IAPIResponse>(environment.API_URL+ GlobalConstant.API_END_POINTS.CANDIDATES);
  }
  addCandidateServ(obj:CandidateModel):Observable<IAPIResponse>{
    return this.http.post<IAPIResponse>(environment.API_URL+ GlobalConstant.API_END_POINTS.CANDIDATES,obj);
  }
  getCandidateByIdServ(id:number):Observable<IAPIResponse>{
    return this.http.get<IAPIResponse>(environment.API_URL+ GlobalConstant.API_END_POINTS.CANDIDATES+'/'+id);
  }
  updateCandidateServ(obj:CandidateModel):Observable<IAPIResponse>{
    return this.http.put<IAPIResponse>(environment.API_URL+ GlobalConstant.API_END_POINTS.CANDIDATES+'/'+obj.candidateId,obj);
  }
  deleteCandidateServ(id:number):Observable<IAPIResponse>{
    return this.http.delete<IAPIResponse>(environment.API_URL+ GlobalConstant.API_END_POINTS.CANDIDATES+'/'+id);
  }
  
}
