import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Controllers, GlobalConstant, METHOD_NAME } from '../../constants/Global.constant';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { IAPIResponse } from '../../models/interfaces/Common.Model';
import { IGetSeesion, ISession } from '../../models/interfaces/Sessions.Model';

@Injectable({
  providedIn: 'root',
})
export class SessionRecordServices {
  http=inject(HttpClient);

  getAllSessionRecordServ():Observable<IAPIResponse>{
    return this.http.get<IAPIResponse>(environment.API_URL+Controllers.BATCH_SESSIONS+'/'+METHOD_NAME.SESSION.GET_ALL_RECORDING)
  }
  addSessionRecordServ(obj:ISession):Observable<IAPIResponse>{
      return this.http.post<IAPIResponse>(environment.API_URL+Controllers.BATCH_SESSIONS,obj);
    }

    getSessionRecordByIdServ(id:number):Observable<IAPIResponse>{
      return this.http.get<IAPIResponse>(environment.API_URL+Controllers.BATCH_SESSIONS+'/'+METHOD_NAME.SESSION.GET_RECORD_BY_ID+id);
    }

    updateSessionRecordServ(obj:ISession):Observable<IAPIResponse>{
      return this.http.put<IAPIResponse>(environment.API_URL+Controllers.BATCH_SESSIONS+'/'+obj.sessionId,obj);
    }
    deleteSessionRecordServ(id:number):Observable<IAPIResponse>{
      return this.http.delete<IAPIResponse>(environment.API_URL+Controllers.BATCH_SESSIONS+'/'+id);
    }

    getAllSessionRecordByBatchIdServ(id:number):Observable<IAPIResponse>{
    return this.http.get<IAPIResponse>(environment.API_URL+Controllers.BATCH_SESSIONS+'/'+METHOD_NAME.SESSION.GET_SESSION_BY_BATCH+'/'+id)
  }
}
