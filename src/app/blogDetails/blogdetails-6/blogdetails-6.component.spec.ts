import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogdetails6Component } from './blogdetails-6.component';

describe('Blogdetails6Component', () => {
  let component: Blogdetails6Component;
  let fixture: ComponentFixture<Blogdetails6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogdetails6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogdetails6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
