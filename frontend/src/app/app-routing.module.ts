import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './Components/pages/employees/employees.component';
import { ProjectsComponent } from './Components/pages/projects/projects.component';

const routes: Routes = [
  { path : "employees", component : EmployeesComponent },
  { path : "projects", component : ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
