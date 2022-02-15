import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddProjectFormComponent } from '../../add-project-form/add-project-form.component';
import { UpdateProjectFormComponent } from '../../update-project-form/update-project-form.component';
import { DeleteProjectFormComponent } from '../../delete-project-form/delete-project-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  data: any = [];

  displayedColumns = ['_id','Project_name','Start_date','Planned_end_date','Description','Project_code'];

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/project/getAllProjects').subscribe(data => {
      this.data = data;
    })
  }

  addProject()
  {
    const modalRef = this.modalService.open(AddProjectFormComponent)
  }

  updateProject(project : any)
  {
    const modalRef = this.modalService.open(UpdateProjectFormComponent)
    modalRef.componentInstance.projectToUpdate = project
  }

  deleteProject(project : any){
    const modalRef = this.modalService.open(DeleteProjectFormComponent)
    modalRef.componentInstance.projectToDelete = project
  }

}
