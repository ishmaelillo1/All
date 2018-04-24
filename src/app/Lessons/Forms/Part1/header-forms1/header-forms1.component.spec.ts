import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderForms1Component } from './header-forms1.component';

describe('HeaderForms1Component', () => {
  let component: HeaderForms1Component;
  let fixture: ComponentFixture<HeaderForms1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderForms1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderForms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
