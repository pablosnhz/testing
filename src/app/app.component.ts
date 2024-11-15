import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsBasicComponent } from "./05-components-basic/components-basic/components-basic.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsBasicComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testing';
  btnText = 'Subscribe';
  isSubscribed = false;

  subscribe(){
    setTimeout(() => {
      this.isSubscribed = true;
      this.btnText = 'Subscribed';
    }, 3000);
  }
}
