import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginServices {
  loginApiUrl='https://feestracking.freeprojectapi.com/api/';
  http = inject(HttpClient)
    onLoginServ(obj:any){
      debugger;
      return this.http.post(`${this.loginApiUrl}BatchUser/login`, obj);
    }
}
