import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppPipesComponent } from './my-app-pipes.component';

describe('MyAppPipesComponent', () => {
  let component: MyAppPipesComponent;
  let fixture: ComponentFixture<MyAppPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
