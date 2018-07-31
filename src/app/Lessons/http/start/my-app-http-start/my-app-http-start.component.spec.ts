import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppHttpStartComponent } from './my-app-http-start.component';

describe('MyAppHttpStartComponent', () => {
  let component: MyAppHttpStartComponent;
  let fixture: ComponentFixture<MyAppHttpStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppHttpStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppHttpStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
