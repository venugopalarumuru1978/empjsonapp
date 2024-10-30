import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpallComponent } from './empall.component';

describe('EmpallComponent', () => {
  let component: EmpallComponent;
  let fixture: ComponentFixture<EmpallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpallComponent]
    });
    fixture = TestBed.createComponent(EmpallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
