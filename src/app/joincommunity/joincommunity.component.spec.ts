import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoincommunityComponent } from './joincommunity.component';

describe('JoincommunityComponent', () => {
  let component: JoincommunityComponent;
  let fixture: ComponentFixture<JoincommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoincommunityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoincommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
