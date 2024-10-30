import { Injectable, OnInit } from '@angular/core';
import { UserServices } from './user.service';
import { UserService } from '../03-services-http/user.service';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService implements OnInit {

  constructor( private userService: UserService, private userServices: UserServices ) { }

  public welcome: string | undefined;

  ngOnInit(): void {
    this.welcome = this.userServices.isLoggedIn() ? 'Bienvenido' + this.userService.getUsers() : 'Not found user';
  }
}
