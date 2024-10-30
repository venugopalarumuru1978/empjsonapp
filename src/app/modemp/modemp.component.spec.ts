import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModempComponent } from './modemp.component';

describe('ModempComponent', () => {
  let component: ModempComponent;
  let fixture: ComponentFixture<ModempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModempComponent]
    });
    fixture = TestBed.createComponent(ModempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
