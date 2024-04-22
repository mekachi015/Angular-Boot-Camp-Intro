import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegiterPageComponent } from './pages/regiter-page/regiter-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { HomeComponent } from './pages/home/home.component';

//manages your navigation in the appliction

//mapping between components

//Do not forget <router-outlet> in app.component.html
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegiterPageComponent},
  {path: 'profile' , component: ProfileComponent},
  {path: 'employee', component: AddEmployeeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
