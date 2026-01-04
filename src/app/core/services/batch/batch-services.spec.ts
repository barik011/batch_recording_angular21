import { TestBed } from '@angular/core/testing';

import { BatchServices } from './batch-services';

describe('BatchServices', () => {
  let service: BatchServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
