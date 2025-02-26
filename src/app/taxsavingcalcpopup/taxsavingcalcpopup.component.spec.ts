import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxsavingcalcpopupComponent } from './taxsavingcalcpopup.component';

describe('TaxsavingcalcpopupComponent', () => {
  let component: TaxsavingcalcpopupComponent;
  let fixture: ComponentFixture<TaxsavingcalcpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxsavingcalcpopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxsavingcalcpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
