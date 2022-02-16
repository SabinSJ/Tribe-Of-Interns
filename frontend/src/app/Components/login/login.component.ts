import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private http : HttpClient, private router : Router ) { }

  email : string = '';
  password : string = '';

  ngOnInit(): void {
  }

  login(){

    this.http.post<any>('http://localhost:3000/users/login', {
      email: this.email,
      password: this.password
    }).subscribe(data => {
      console.log(data)
      sessionStorage.setItem('token', data);
      window.location.href = '/';
    },
    err => {
      console.log(err)
    })
  }

}
