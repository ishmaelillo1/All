import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentMyPipesComponent } from './assignment-my-pipes.component';

describe('AssignmentMyPipesComponent', () => {
  let component: AssignmentMyPipesComponent;
  let fixture: ComponentFixture<AssignmentMyPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentMyPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentMyPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
