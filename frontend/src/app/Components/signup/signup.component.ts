import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private http: HttpClient ) { }

  email : string = ""
  password : string = ""

  ngOnInit(): void {
  }

  signup()
  {
    console.log(this.email)
    console.log(this.password)

    this.http.post<any>('http://localhost:3000/users/signup', {
      email:this.email,
      password:this.password
    }).subscribe(data => {
      window.location.href = '/login';
    }, err => {
      console.log(err)
    })
  }

}
