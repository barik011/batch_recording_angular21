import { NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-candidates',
  imports: [NgClass],
  templateUrl: './candidates.html',
  styleUrl: './candidates.css',
})
export class Candidates {

@ViewChild('candidateModal') candidateModal!:ElementRef;
toggleView:boolean=false;


  openModal(){
    this.candidateModal.nativeElement.style.display='block';
  }
  closeModal(){
    this.candidateModal.nativeElement.style.display='none';
  }
  onToggleView(){
    this.toggleView = !this.toggleView;
  }

}
