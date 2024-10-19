import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsBasicComponent } from "./05-components-basic/components-basic/components-basic.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsBasicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testing';
}
