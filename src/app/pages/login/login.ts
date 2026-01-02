import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServices } from '../../services/login-services';

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
          localStorage.setItem('batch32', JSON.stringify(result.data));
          this.router.navigateByUrl('dashboard');
        },
        error: (err: any) => {
          debugger;
          alert(err.error.message);
        },
      });
  }
}
