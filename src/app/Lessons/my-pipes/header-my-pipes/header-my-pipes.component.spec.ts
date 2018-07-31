import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMyPipesComponent } from './header-my-pipes.component';

describe('HeaderMyPipesComponent', () => {
  let component: HeaderMyPipesComponent;
  let fixture: ComponentFixture<HeaderMyPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMyPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMyPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
