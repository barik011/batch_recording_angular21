import { NgStyle, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NgStyle, NgClass, RouterLinkWithHref],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  loggedInData: any;
  toggleLeftPanel:boolean=true;
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

  onToggleLeftPanel(){
    this.toggleLeftPanel=!this.toggleLeftPanel;
  }
}
