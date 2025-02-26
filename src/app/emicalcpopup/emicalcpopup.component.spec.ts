import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmicalcpopupComponent } from './emicalcpopup.component';

describe('EmicalcpopupComponent', () => {
  let component: EmicalcpopupComponent;
  let fixture: ComponentFixture<EmicalcpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmicalcpopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmicalcpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
