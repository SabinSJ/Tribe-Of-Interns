import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-project-form',
  templateUrl: './update-project-form.component.html',
  styleUrls: ['./update-project-form.component.css']
})
export class UpdateProjectFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

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

  updateEmployee()
  {
    this.http.put<any>(`http://localhost:3000/project/change/${this.projectToUpdate._id}`, {
      Project_name: this.projectToUpdate.Project_name,
      Start_date: this.projectToUpdate.Start_date,
      Planned_end_date: this.projectToUpdate.Planned_end_date,
      Description: this.projectToUpdate.Description,
      Project_code: this.projectToUpdate.Project_code
    }).subscribe(data => {
      console.log(data)
      alert("Project updated")
      window.location.reload()
    })
  }

}
