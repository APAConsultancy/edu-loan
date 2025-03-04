import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogdetails3Component } from './blogdetails-3.component';

describe('Blogdetails3Component', () => {
  let component: Blogdetails3Component;
  let fixture: ComponentFixture<Blogdetails3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogdetails3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogdetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
