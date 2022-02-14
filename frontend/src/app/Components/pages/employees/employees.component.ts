import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddEmployeeFormComponent } from '../../add-employee-form/add-employee-form.component';
import { UpdateEmployeeFormComponent } from '../../update-employee-form/update-employee-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  data: any = [];

  displayedColumns = ['_id','Name','Address','Email','Hire_date','Salary','Job_Title','project_id'];

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/employee/getAllEmployees').subscribe(data => {
      this.data = data;
    })
  }

  addEmployee()
  {
    const modalRef = this.modalService.open(AddEmployeeFormComponent)
  }

  updateEmployee(employee : any)
  {
    const modalRef = this.modalService.open(UpdateEmployeeFormComponent)
    modalRef.componentInstance.employeeToUpdate = employee
  }

  deleteEmployee(element : any){
    console.log('remove employee from id: ' + element)
    this.http.delete<any>(`http://localhost:3000/employee/delete/${element}`).subscribe( () => {
      alert("Employee deleted")
      window.location.reload()
    })
  }

}
