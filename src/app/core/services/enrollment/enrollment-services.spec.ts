import { TestBed } from '@angular/core/testing';

import { EnrollmentServices } from './enrollment-services';

describe('EnrollmentServices', () => {
  let service: EnrollmentServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollmentServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
