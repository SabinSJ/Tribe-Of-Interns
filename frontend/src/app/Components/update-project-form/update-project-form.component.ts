import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-project-form',
  templateUrl: './update-project-form.component.html',
  styleUrls: ['./update-project-form.component.css']
})
export class UpdateProjectFormComponent implements OnInit {

  constructor(private http: HttpClient, public activeModal: NgbActiveModal) { }

  isSuccesful = false

  projectToUpdate = {
    _id:"",
    Project_name:"",
    Start_date:"",
    Planned_end_date:"",
    Description:"",
    Project_code:""
  }

  ngOnInit(): void {
  }

  updateProject()
  {
    this.http.put<any>(`http://localhost:3000/project/change/${this.projectToUpdate._id}`, {
      Project_name: this.projectToUpdate.Project_name,
      Start_date: this.projectToUpdate.Start_date,
      Planned_end_date: this.projectToUpdate.Planned_end_date,
      Description: this.projectToUpdate.Description,
      Project_code: this.projectToUpdate.Project_code
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
