import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserObservablesComponent } from './user-observables.component';

describe('UserObservablesComponent', () => {
  let component: UserObservablesComponent;
  let fixture: ComponentFixture<UserObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
