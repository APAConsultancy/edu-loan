import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogdetails1Component } from './blogdetails-1.component';

describe('Blogdetails1Component', () => {
  let component: Blogdetails1Component;
  let fixture: ComponentFixture<Blogdetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogdetails1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogdetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
