import { Injectable } from '@angular/core';
import { CandidateModel } from '../../models/classes/Candidate.Model';

@Injectable({
  providedIn: 'root',
})
export class UserServices {

  loggedData:CandidateModel= new CandidateModel();
  constructor(){
    const localData = localStorage.getItem('batch32');
    if (localData != null) {
      this.loggedData = JSON.parse(localData);
    }
  }
  
}
