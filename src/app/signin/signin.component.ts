import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from '../models/User';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  userLogin:User;
  tokenData;
  error;

  constructor(private authService: AuthService, private router: Router) { 
    this.userLogin = {'ID_USER':"", 'NAME_USER':'','LAST_NAME':'','EMAIL':'', 'IDENTIFICATION':'', 'LOGIN':'', 'PASSWORD_USER':'', 'STATE_ID_STATE':''};
  }

  ngOnInit() {
  }

  onSignin() {
  	this.authService.signin(this.userLogin.LOGIN, this.userLogin.PASSWORD_USER)
  	.subscribe(
  		tokenData => this.tokenData = tokenData,
  		error => this.messageError(error),
      () => this.redirectToHome(),
  		);
  }

  redirectToHome(){
    if(this.tokenData != null){
       this.router.navigate(['/home']);
    }
  }

  messageError(error:any){
    console.log(error);
    if(error != null){
      alert("Invalid login or password. Try again");
    }
  }

}
