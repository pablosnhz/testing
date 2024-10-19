import { Component } from '@angular/core';

@Component({
  selector: 'app-components-basic',
  standalone: true,
  imports: [],
  templateUrl: './components-basic.component.html',
  styleUrl: './components-basic.component.scss'
})
export class ComponentsBasicComponent {

  constructor() { }

  ngOnInit(): void { }

  public isOn: boolean = true;

  get message() {
    return `${this.isOn ? 'Prendido' : 'Apagado'}`;
    // if (this.isOn) {
    //   return 'Prendido';
    // } else {
    //   return 'Apagado';
    // }
  }

  clicked() {
    this.isOn = !this.isOn;
  }
}
