import { NgStyle, NgClass, AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { UserServices } from '../../core/services/user/user-services';
import { CandidateModel } from '../../core/models/classes/Candidate.Model';
import { Roles } from '../../core/enums/role.enum';
import { IAPIResponse } from '../../core/models/interfaces/Common.Model';
import { map } from 'rxjs';


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

  roleEnum=Roles;


  constructor() {
    //this.loggedInData =this.userSrv.loggedDataBehSub$.pipe(map((resp:CandidateModel)=>resp.data))
  }

  onLogOff() {
    localStorage.removeItem('batch32');
    this.router.navigate(['login']);
  }

  onToggleLeftPanel(){
    this.toggleLeftPanel=!this.toggleLeftPanel;
  }
}
