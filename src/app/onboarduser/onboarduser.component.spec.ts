import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboarduserComponent } from './onboarduser.component';

describe('OnboarduserComponent', () => {
  let component: OnboarduserComponent;
  let fixture: ComponentFixture<OnboarduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboarduserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboarduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
