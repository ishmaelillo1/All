import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeMainComponent } from './All/home-main/home-main.component';
import { ErrorComponentComponent } from './All/error-component/error-component.component';
import { AppObservablesComponent } from './Lessons/Observables/app-observables/app-observables.component';
import { HomeObservablesComponent } from './Lessons/Observables/home-observables/home-observables.component';
import { UserObservablesComponent } from './Lessons/Observables/user-observables/user-observables.component';
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
    {path: 'not-found', component: ErrorComponentComponent, data: {message: 'Page not found!'}},
    {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
