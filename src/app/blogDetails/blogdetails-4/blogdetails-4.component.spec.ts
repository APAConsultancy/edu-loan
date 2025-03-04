import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogdetails4Component } from './blogdetails-4.component';

describe('Blogdetails4Component', () => {
  let component: Blogdetails4Component;
  let fixture: ComponentFixture<Blogdetails4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogdetails4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogdetails4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
