import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { UserService } from '../core/user/user.service';
import { User } from '../core/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  user$: Observable<User>;
  user: User;

  constructor(private userService: UserService, private router: Router) {
    this.user$ = userService.getUser();
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['']);
  }

}
