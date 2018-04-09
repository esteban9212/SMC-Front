import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
  	this.authService.signin(form.value.username, form.value.password)
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
