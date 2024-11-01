import { Injectable, OnInit } from '@angular/core';

import { UserService } from '../03-services-http/user.service';
import { UserServices } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class WelcomeComponent implements OnInit {

  constructor( private userService: UserService, private userServices: UserServices ) { }

  public welcome: string | undefined;

  ngOnInit(): void {
    this.welcome = this.userServices.isLoggedIn() ? 'Welcome' + this.userService.user.name : 'Not found user';
  }
}
