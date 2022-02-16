import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './Components/pages/employees/employees.component';
import { ProjectsComponent } from './Components/pages/projects/projects.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  { path : "employees", component : EmployeesComponent },
  { path : "projects", component : ProjectsComponent },
  { path : "login", component : LoginComponent },
  { path : "signup", component : SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
