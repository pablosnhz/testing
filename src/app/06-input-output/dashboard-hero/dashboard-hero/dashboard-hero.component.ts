import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-dashboard-hero',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-hero.component.html',
  styleUrl: './dashboard-hero.component.scss'
})
export class DashboardHeroComponent {

  @Input() hero: Hero | undefined;
  @Output() selected = new EventEmitter<Hero>();

  click(){
    this.selected.emit(this.hero);
  }

}
