import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeMainComponent,
    ErrorComponentComponent,
    HomeObservablesComponent,
    UserObservablesComponent,
    AppObservablesComponent,
    AppForm1Component
  ],
  imports: [


  BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
