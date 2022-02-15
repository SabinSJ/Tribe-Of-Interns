import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesComponent } from './Components/pages/employees/employees.component';
import { AddEmployeeFormComponent } from './Components/add-employee-form/add-employee-form.component';
import { UpdateEmployeeFormComponent } from './Components/update-employee-form/update-employee-form.component';
import { ProjectsComponent } from './Components/pages/projects/projects.component';
import { AddProjectFormComponent } from './Components/add-project-form/add-project-form.component';
import { UpdateProjectFormComponent } from './Components/update-project-form/update-project-form.component';
import { DeleteEmployeeFormComponent } from './Components/delete-employee-form/delete-employee-form.component';
import { DeleteProjectFormComponent } from './Components/delete-project-form/delete-project-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeesComponent,
    AddEmployeeFormComponent,
    UpdateEmployeeFormComponent,
    ProjectsComponent,
    AddProjectFormComponent,
    UpdateProjectFormComponent,
    DeleteEmployeeFormComponent,
    DeleteProjectFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
