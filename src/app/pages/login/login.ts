import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,NgClass],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  http = inject(HttpClient);
  router = inject(Router)
  loginObj:any = {
  email: "",
  password: ""
}

onLogin(){
  debugger;
  this.http.post('https://feestracking.freeprojectapi.com/api/BatchUser/login',this.loginObj).subscribe({
    next:(result:any)=>{
      debugger;
      localStorage.setItem('batch32',JSON.stringify(result.data));
      this.router.navigateByUrl('dashboard');
    },
    error:(err:any)=>{
      debugger;
      alert(err.error.message)
    }
  })

}


}
