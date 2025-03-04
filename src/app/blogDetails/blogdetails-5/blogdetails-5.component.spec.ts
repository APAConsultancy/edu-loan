import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogdetails5Component } from './blogdetails-5.component';

describe('Blogdetails5Component', () => {
  let component: Blogdetails5Component;
  let fixture: ComponentFixture<Blogdetails5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogdetails5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogdetails5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
