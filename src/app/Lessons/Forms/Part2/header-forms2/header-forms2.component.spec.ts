import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForms2Component } from './header-forms2.component';

describe('HeaderForms2Component', () => {
  let component: HeaderForms2Component;
  let fixture: ComponentFixture<HeaderForms2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderForms2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderForms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
