import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Controllers, GlobalConstant } from '../../constants/Global.constant';

@Injectable({
  providedIn: 'root',
})
export class LoginServices {
  //loginApiUrl='https://feestracking.freeprojectapi.com/api/';
  http = inject(HttpClient)
    onLoginServ(obj:any){
      debugger;
      return this.http.post(environment.API_URL+Controllers.BATCH_USER_LOGIN, obj);
    }
}
