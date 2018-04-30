import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from "../services/auth.service";
import { Observable } from 'rxjs/Rx';
import { User } from '../models/user';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  user1:Observable<User>
  user:User;
  noShow=false;

  constructor(private userService:UserService, private authService: AuthService, private router: Router) { }

  ngOnInit() {

    var idUser = localStorage.getItem('user')

    idUser = idUser.slice(1, -1);

    this.user1 = this.userService.getUser(idUser);

    this.user1.subscribe(us=>{
      this.user=us;
    });
  }

  logout(){
    this.authService.logout();
    localStorage.clear();
    this.router.navigate(['/signin']);
  }

}
