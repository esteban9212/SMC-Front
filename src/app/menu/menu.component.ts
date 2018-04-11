import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from "../services/auth.service";
import { Observable } from 'rxjs/Rx';
import { User } from '../models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


	user1:Observable<User>
  user2:Observable<User>
	user:User;

  constructor(private authService: AuthService, private userService:UserService) { }

  ngOnInit() {

    this.user2=this.authService.me();

  	this.user1=this.userService.getUser('2813');

		this.user1.subscribe(us=>{
			this.user=us;
		});
  }

}
