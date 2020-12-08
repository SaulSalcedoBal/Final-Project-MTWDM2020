import { Component, OnInit } from '@angular/core';


import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  isUserAuthenticated() {
    const token: string = localStorage.getItem("jwt");
    const isExpired = helper.isTokenExpired(token);
    if (token && !isExpired) {
      return true;
    }
    else {
      return false;
    }
  }

  ngOnInit(): void {
  }

}
