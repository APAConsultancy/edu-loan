import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogdetails2Component } from './blogdetails-2.component';

describe('Blogdetails2Component', () => {
  let component: Blogdetails2Component;
  let fixture: ComponentFixture<Blogdetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogdetails2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogdetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
