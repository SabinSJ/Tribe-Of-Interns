import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-project-form',
  templateUrl: './delete-project-form.component.html',
  styleUrls: ['./delete-project-form.component.css']
})
export class DeleteProjectFormComponent implements OnInit {

  constructor(private http: HttpClient, public activeModal: NgbActiveModal) { }

  isSuccesful = false

  projectToDelete = {
    _id:"",
    Project_name:"",
    Start_date:"",
    Planned_end_date:"",
    Description:"",
    Project_code:""
  }

  ngOnInit(): void {
  }

  deleteProject(){
    this.http.delete<any>(`http://localhost:3000/project/delete/${this.projectToDelete._id}`).subscribe( () => {
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
