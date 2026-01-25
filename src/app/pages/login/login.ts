import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServices } from '../../core/services/login/login-services';
import { GlobalConstant } from '../../core/constants/Global.constant';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgClass],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  http = inject(HttpClient);
  router = inject(Router);

  logServ = inject(LoginServices)


  loginObj: any = {
    email: '',
    password: '',
  };

  onLogin() {
    debugger;
      this.logServ.onLoginServ(this.loginObj).subscribe({
        next: (result: any) => {
          debugger;
          localStorage.setItem(GlobalConstant.LOCAL_STORAGE_KEYS.LOCAL_KEY_LOGIN, JSON.stringify(result.data));
          localStorage.setItem('batchToken',JSON.stringify(result.token));
          this.router.navigateByUrl('dashboard');
        },
        error: (err: any) => {
          debugger;
          alert(err.error.message);
        },
      });
  }
}
