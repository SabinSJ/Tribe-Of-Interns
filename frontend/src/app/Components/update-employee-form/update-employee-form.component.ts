import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-employee-form',
  templateUrl: './update-employee-form.component.html',
  styleUrls: ['./update-employee-form.component.css']
})
export class UpdateEmployeeFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  employeeToUpdate = {
    _id:"",
    Name:"",
    Address:"",
    Email:"",
    Hire_date:"",
    Salary:"",
    Job_Title:"",
    project_id:""
  }

  ngOnInit(): void {}

  updateEmployee()
  {
    this.http.put<any>(`http://localhost:3000/employee/change/${this.employeeToUpdate._id}`, {
      Name: this.employeeToUpdate.Name,
      Address: this.employeeToUpdate.Address,
      Email: this.employeeToUpdate.Email,
      Hire_date: this.employeeToUpdate.Hire_date,
      Salary: this.employeeToUpdate.Salary,
      Job_Title: this.employeeToUpdate.Job_Title,
      project_id: this.employeeToUpdate.project_id
    }).subscribe(data => {
      console.log(data)
      alert("Employee updated")
      window.location.reload()
    })
  }
}
