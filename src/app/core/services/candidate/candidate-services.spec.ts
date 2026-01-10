import { TestBed } from '@angular/core/testing';

import { CandidateServices } from './candidate-services';

describe('CandidateServices', () => {
  let service: CandidateServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
