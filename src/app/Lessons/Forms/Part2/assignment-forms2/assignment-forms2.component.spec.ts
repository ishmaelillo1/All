import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentForms2Component } from './assignment-forms2.component';

describe('AssignmentForms2Component', () => {
  let component: AssignmentForms2Component;
  let fixture: ComponentFixture<AssignmentForms2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentForms2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentForms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
