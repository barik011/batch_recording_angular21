import { NgStyle, NgClass, AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { UserServices } from '../../core/services/user/user-services';
import { CandidateModel } from '../../core/models/classes/Candidate.Model';


@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLinkWithHref, AsyncPipe, NgIf],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  toggleLeftPanel:boolean=true;
  router = inject(Router);
  userSrv = inject(UserServices)
  loggedInData:CandidateModel=new CandidateModel();
  constructor() {
  }

  onLogOff() {
    localStorage.removeItem('batch32');
    this.router.navigate(['login']);
  }

  onToggleLeftPanel(){
    this.toggleLeftPanel=!this.toggleLeftPanel;
  }
}
