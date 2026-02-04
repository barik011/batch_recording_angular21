import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Controllers, GlobalConstant, METHOD_NAME } from '../../constants/Global.constant';
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
      return this.http.get<IAPIResponse>(environment.API_URL+Controllers.BATCH_ENROLLMENT+'/'+METHOD_NAME.ENROLMENT.GET_ALL_ENROLLMENT);
    }
    getEnrollmentByIdServ(id:number):Observable<IAPIResponse>{
      debugger;
      return this.http.get<IAPIResponse>(environment.API_URL+Controllers.BATCH_ENROLLMENT+'/'+METHOD_NAME.ENROLMENT.GET_BY_BATCH_ID+'?enrollmentid='+id);
    }
    addEnrollmentServ(obj:EnrollmentModel):Observable<IAPIResponse>{
        return this.http.post<IAPIResponse>(environment.API_URL+ Controllers.BATCH_ENROLLMENT,obj);
      }
      updateEnrollmentServ(obj:EnrollmentModel):Observable<IAPIResponse>{
        return this.http.put<IAPIResponse>(environment.API_URL+ Controllers.BATCH_ENROLLMENT+'/'+obj.enrollmentId,obj);
      }
      deleteEnrollmentServ(id:number):Observable<IAPIResponse>{
        return this.http.delete<IAPIResponse>(environment.API_URL+ Controllers.BATCH_ENROLLMENT+'/'+ id);
      }
    //https://feestracking.freeprojectapi.com/api/BatchEnrollments/by-candidate/103
      getBatchedEnrolledByCandidateId(id:number){
        //return this.http.get<IAPIResponse>(environment.API_URL+ Controllers.BATCH_ENROLLMENT+'/'++id);
      }
}
