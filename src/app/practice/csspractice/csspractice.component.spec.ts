import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsspracticeComponent } from './csspractice.component';

describe('CsspracticeComponent', () => {
  let component: CsspracticeComponent;
  let fixture: ComponentFixture<CsspracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsspracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsspracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
