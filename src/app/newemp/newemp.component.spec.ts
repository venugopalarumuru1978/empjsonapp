import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewempComponent } from './newemp.component';

describe('NewempComponent', () => {
  let component: NewempComponent;
  let fixture: ComponentFixture<NewempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewempComponent]
    });
    fixture = TestBed.createComponent(NewempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
