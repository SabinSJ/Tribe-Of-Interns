import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})
export class AddEmployeeFormComponent implements OnInit {

  constructor(private http: HttpClient, public activeModal: NgbActiveModal) { }

  displayedColumns = ['Name','Address','Email','Hire_date','Salary','Job_Title','project_id'];

  isSuccesful = false

  Name: string = '';
  Address: string = '';
  Email: string = '';
  Hire_date: any
  Salary: number = 0;
  Job_Title: string = '';
  project_id: any

  ngOnInit(): void {
  }

  addNewEmployee()
  {
    this.http.post<any>('http://localhost:3000/employee/save', {
      Name: this.Name,
      Address: this.Address,
      Email: this.Email,
      Hire_date: this.Hire_date,
      Salary: this.Salary,
      Job_Title: this.Job_Title,
      project_id: this.project_id
    }).subscribe(data => {
      this.isSuccesful = true
      setTimeout(function(){
        window.location.reload()
      },1000);
    }, err => {
      this.isSuccesful = false
    })
  }

  close() {
    this.activeModal.dismiss('Cross click')
  }

}