import { TestBed } from '@angular/core/testing';

import { LoanJourneyService } from './loan-journey.service';

describe('LoanJourneyService', () => {
  let service: LoanJourneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanJourneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
