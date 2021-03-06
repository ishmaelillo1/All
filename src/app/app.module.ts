import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeMainComponent } from './All/home-main/home-main.component';
import { ErrorComponentComponent } from './All/error-component/error-component.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeObservablesComponent } from './Lessons/Observables/home-observables/home-observables.component';
import { UserObservablesComponent } from './Lessons/Observables/user-observables/user-observables.component';
import { AppObservablesComponent } from './Lessons/Observables/app-observables/app-observables.component';

import { UsersService } from './Lessons/Observables/users.service';
import { AppForm1Component } from './Lessons/Forms/Part1/app-form1/app-form1.component';
import { HeaderForms1Component } from './Lessons/Forms/Part1/header-forms1/header-forms1.component';
import { MainForms1Component } from './Lessons/Forms/Part1/main-forms1/main-forms1.component';
import { AssignmentForms1Component } from './Lessons/Forms/Part1/assignment-forms1/assignment-forms1.component';
import { HeaderForms2Component } from './Lessons/Forms/Part2/header-forms2/header-forms2.component';
import { MainForms2Component } from './Lessons/Forms/Part2/main-forms2/main-forms2.component';
import { AssignmentForms2Component } from './Lessons/Forms/Part2/assignment-forms2/assignment-forms2.component';
import { AppForm2Component } from './Lessons/Forms/Part2/app-form2/app-form2.component';
import { MyMainPipesComponent } from './Lessons/my-pipes/my-main-pipes/my-main-pipes.component';
import { MyAppPipesComponent } from './Lessons/my-pipes/my-app-pipes/my-app-pipes.component';
import { AssignmentMyPipesComponent } from './Lessons/my-pipes/assignment-my-pipes/assignment-my-pipes.component';
import { HeaderMyPipesComponent } from './Lessons/my-pipes/header-my-pipes/header-my-pipes.component';
import { ShortenPipe } from './Lessons/my-pipes/shorten.pipes';
import { FilterPipe } from './Lessons/my-pipes/filter.pipe';
import { ReversePipe } from './reverse.pipe';
import { SortPipe } from './Lessons/my-pipes/sort.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeMainComponent,
    ErrorComponentComponent,
    HomeObservablesComponent,
    UserObservablesComponent,
    AppObservablesComponent,
    AppForm1Component,
    HeaderForms1Component,
    MainForms1Component,
    AssignmentForms1Component,
    HeaderForms2Component,
    MainForms2Component,
    AssignmentForms2Component,
    AppForm2Component,
    MyMainPipesComponent,
    MyAppPipesComponent,
    AssignmentMyPipesComponent,
    HeaderMyPipesComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe
  ],
  imports: [
  BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
