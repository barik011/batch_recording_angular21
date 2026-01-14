import { TestBed } from '@angular/core/testing';

import { SessionRecordServices } from './session-record-services';

describe('SessionRecordServices', () => {
  let service: SessionRecordServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionRecordServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
