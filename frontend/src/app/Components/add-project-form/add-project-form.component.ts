import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.css']
})
export class AddProjectFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  displayedColumns = ['_id','Project_name','Start_date','Planned_end_date','Description','Project_code'];

  Project_name: string = '';
  Start_date: any;
  Planned_end_date: any;
  Description: string = ''
  Project_code: string = '';

  ngOnInit(): void {
  }

  addNewProject()
  {
    this.http.post<any>('http://localhost:3000/project/save', {
      Project_name: this.Project_name,
      Start_date: this.Start_date,
      Planned_end_date: this.Planned_end_date,
      Description: this.Description,
      Project_code: this.Project_code
    }).subscribe(data => {console.log(data)})
  }

}
