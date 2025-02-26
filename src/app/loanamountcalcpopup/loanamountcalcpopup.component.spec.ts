import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanamountcalcpopupComponent } from './loanamountcalcpopup.component';

describe('LoanamountcalcpopupComponent', () => {
  let component: LoanamountcalcpopupComponent;
  let fixture: ComponentFixture<LoanamountcalcpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanamountcalcpopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanamountcalcpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
