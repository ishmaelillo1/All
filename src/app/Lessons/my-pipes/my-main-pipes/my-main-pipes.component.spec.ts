import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMainPipesComponent } from './my-main-pipes.component';

describe('MyMainPipesComponent', () => {
  let component: MyMainPipesComponent;
  let fixture: ComponentFixture<MyMainPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMainPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMainPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
