import { Injectable } from '@angular/core';
import { CandidateModel } from '../../models/classes/Candidate.Model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServices {

  loggedData:CandidateModel= new CandidateModel();

  loggedDataBehSub$:BehaviorSubject<CandidateModel>=new BehaviorSubject<CandidateModel>(this.loggedData)
  constructor(){
    const localData = localStorage.getItem('batch32');
    if (localData != null) {
      this.loggedDataBehSub$.next(JSON.parse(localData)) ;
    }
  }
  
}
