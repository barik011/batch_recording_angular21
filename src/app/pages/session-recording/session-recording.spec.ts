import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionRecording } from './session-recording';

describe('SessionRecording', () => {
  let component: SessionRecording;
  let fixture: ComponentFixture<SessionRecording>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionRecording]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionRecording);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
