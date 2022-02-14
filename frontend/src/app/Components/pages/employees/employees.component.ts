import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data = [];

  displayedColumns = ['Name','Address','Email','Hire_date','Salary','Job_Title','project_id'];

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/employee/getAllEmployees').subscribe(data => {
      this.data = data;
    })
  }

}
