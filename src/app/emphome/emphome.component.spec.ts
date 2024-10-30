import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmphomeComponent } from './emphome.component';

describe('EmphomeComponent', () => {
  let component: EmphomeComponent;
  let fixture: ComponentFixture<EmphomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmphomeComponent]
    });
    fixture = TestBed.createComponent(EmphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
