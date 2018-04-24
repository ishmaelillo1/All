import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainForms1Component } from './main-forms1.component';

describe('MainForms1Component', () => {
  let component: MainForms1Component;
  let fixture: ComponentFixture<MainForms1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainForms1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainForms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
