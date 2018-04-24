import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentForms1Component } from './assignment-forms1.component';

describe('AssignmentForms1Component', () => {
  let component: AssignmentForms1Component;
  let fixture: ComponentFixture<AssignmentForms1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentForms1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentForms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
