import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsBasicComponent } from "./05-components-basic/components-basic/components-basic.component";
import { NgFor, NgIf } from '@angular/common';
import { GradePipe } from "./pipe/grade.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsBasicComponent, NgIf, NgFor, GradePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testing';
  btnText = 'Subscribe';
  isSubscribed = false;

  marks = [97, 68, 83, 29, 75];

  subscribe(){
    setTimeout(() => {
      this.isSubscribed = true;
      this.btnText = 'Subscribed';
    }, 3000);
  }
}
