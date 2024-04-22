import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegiterPageComponent } from './pages/regiter-page/regiter-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { HomeComponent } from './pages/home/home.component';

//generated components appear here

//manages parts of the projects(anything that is generated)
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegiterPageComponent,
    ProfileComponent,
    NavBarComponent,
    AddEmployeeComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
