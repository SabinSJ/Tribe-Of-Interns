import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loggedIn()
  {
    return sessionStorage.getItem('token')
  }

  onLogout()
  {
    return sessionStorage.removeItem('token')
  }

}
