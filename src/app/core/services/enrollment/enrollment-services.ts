import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { GlobalConstant } from '../../constants/Global.constant';
import { Observable } from 'rxjs';
import { IAPIResponse } from '../../models/interfaces/Common.Model';
import { EnrollmentModel } from '../../models/classes/Enrollment.Model';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentServices {
    http= inject(HttpClient);


    getAllEnrollmentServ():Observable<IAPIResponse>{
      debugger;
      return this.http.get<IAPIResponse>(environment.API_URL+GlobalConstant.API_END_POINTS.BATCH_ENROLLMENT+'/'+GlobalConstant.API_END_POINTS.GET_ALL_ENROLLMENT);
    }
    getEnrollmentByIdServ(id:number):Observable<IAPIResponse>{
      debugger;
      return this.http.get<IAPIResponse>(environment.API_URL+GlobalConstant.API_END_POINTS.BATCH_ENROLLMENT+'/'+GlobalConstant.API_END_POINTS.GET_ENROLLMENT_BY_ID+'?enrollmentid='+id);
    }
    addEnrollmentServ(obj:EnrollmentModel):Observable<IAPIResponse>{
        return this.http.post<IAPIResponse>(environment.API_URL+ GlobalConstant.API_END_POINTS.BATCH_ENROLLMENT,obj);
      }
      updateEnrollmentServ(obj:EnrollmentModel):Observable<IAPIResponse>{
        return this.http.post<IAPIResponse>(environment.API_URL+ GlobalConstant.API_END_POINTS.BATCH_ENROLLMENT,obj);
      }
    
}
