import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifycustomerComponent } from './modifycustomer.component';

describe('ModifycustomerComponent', () => {
  let component: ModifycustomerComponent;
  let fixture: ComponentFixture<ModifycustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifycustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifycustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
