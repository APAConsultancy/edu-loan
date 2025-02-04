import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanJourneyComponent } from './loan-journey.component';

describe('LoanJourneyComponent', () => {
  let component: LoanJourneyComponent;
  let fixture: ComponentFixture<LoanJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanJourneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
