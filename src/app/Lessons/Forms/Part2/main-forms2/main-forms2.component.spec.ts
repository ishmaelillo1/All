import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainForms2Component } from './main-forms2.component';

describe('MainForms2Component', () => {
  let component: MainForms2Component;
  let fixture: ComponentFixture<MainForms2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainForms2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainForms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
