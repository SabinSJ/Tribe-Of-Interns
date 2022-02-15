import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-employee-form',
  templateUrl: './delete-employee-form.component.html',
  styleUrls: ['./delete-employee-form.component.css']
})
export class DeleteEmployeeFormComponent implements OnInit {

  constructor(private http: HttpClient, public activeModal: NgbActiveModal) { }

  isSuccesful = false

  employeeToDelete = {
    _id:"",
    Name:"",
    Address:"",
    Email:"",
    Hire_date:"",
    Salary:"",
    Job_Title:"",
    project_id:""
  }

  ngOnInit(): void {
  }

  deleteEmployee(){
    this.http.delete<any>(`http://localhost:3000/employee/delete/${this.employeeToDelete._id}`).subscribe( () => {
      this.isSuccesful = true
      setTimeout(function(){
        window.location.reload()
      },1000);
    }, err =>{
      this.isSuccesful = false
    })
  }

  close() {
    this.activeModal.dismiss('Cross click')
  }
}
