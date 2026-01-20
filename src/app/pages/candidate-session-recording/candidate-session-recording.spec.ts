import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSessionRecording } from './candidate-session-recording';

describe('CandidateSessionRecording', () => {
  let component: CandidateSessionRecording;
  let fixture: ComponentFixture<CandidateSessionRecording>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateSessionRecording]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateSessionRecording);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
