import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeMainComponent } from './All/home-main/home-main.component';
import { ErrorComponentComponent } from './All/error-component/error-component.component';
import { AppObservablesComponent } from './Lessons/Observables/app-observables/app-observables.component';
import { HomeObservablesComponent } from './Lessons/Observables/home-observables/home-observables.component';
import { UserObservablesComponent } from './Lessons/Observables/user-observables/user-observables.component';
import { AppForm1Component } from './Lessons/Forms/Part1/app-form1/app-form1.component';
import { MainForms1Component } from './Lessons/Forms/Part1/main-forms1/main-forms1.component';
import { AssignmentForms1Component } from './Lessons/Forms/Part1/assignment-forms1/assignment-forms1.component';
import { MainForms2Component } from './Lessons/Forms/Part2/main-forms2/main-forms2.component';
import { AppForm2Component } from './Lessons/Forms/Part2/app-form2/app-form2.component';
import { AssignmentForms2Component } from './Lessons/Forms/Part2/assignment-forms2/assignment-forms2.component';
// import { ErrorComponentComponent } from './error-component/error-component.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeMainComponent},
    {path: 'Observables', component: AppObservablesComponent, children: [
      {path: 'Home', component: HomeObservablesComponent},
      {path: 'user/:id', component: UserObservablesComponent}
    ]
    },
    {path: 'FormsPart1', component: MainForms1Component, children : [
      {path: 'Lesson', component: AppForm1Component},
      {path: 'Assignment', component: AssignmentForms1Component}
      ]
    },
    {path: 'FormsPart2', component: MainForms2Component, children : [
      {path: 'Lesson', component: AppForm2Component},
      {path: 'Assignment', component: AssignmentForms2Component}
      ]
    },
    {path: 'not-found', component: ErrorComponentComponent, data: {message: 'Page not found!'}},
    {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],


exports: [RouterModule]
})
export class AppRoutingModule {

}
