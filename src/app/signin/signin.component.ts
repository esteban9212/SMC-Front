import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from '../models/user';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  userLogin:User;

  constructor(private authService: AuthService, private router: Router) { 
    this.userLogin = {'ID_USER':"", 'NAME_USER':'','LAST_NAME':'','EMAIL':'', 'IDENTIFICATION':'', 'LOGIN':'', 'PASSWORD_USER':'', 'STATE_ID_STATE':''};
  }

  ngOnInit() {
  }

  onSignin() {
    console.log(this.userLogin.LOGIN);
    console.log(this.userLogin.PASSWORD_USER)
  	this.authService.signin(this.userLogin.LOGIN, this.userLogin.PASSWORD_USER)
  	.subscribe(
  		tokenData => console.log(tokenData),
  		error => console.log(error)
  		);

	var tokenData = localStorage.getItem('token');

  if (tokenData == null){
    
	}else{
		this.router.navigate(['/home']);
	}  


  }

}
