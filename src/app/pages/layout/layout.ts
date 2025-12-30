import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  loggedInData: any;

  router = inject(Router);

  constructor() {
    const localData = localStorage.getItem('batch32');
    if (localData != null) {
      this.loggedInData = JSON.parse(localData);
    }
  }

  onLogOff() {
    localStorage.removeItem('batch32');
    this.router.navigate(['login']);
  }
}
