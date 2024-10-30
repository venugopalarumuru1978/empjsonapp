import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneempComponent } from './oneemp.component';

describe('OneempComponent', () => {
  let component: OneempComponent;
  let fixture: ComponentFixture<OneempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneempComponent]
    });
    fixture = TestBed.createComponent(OneempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
