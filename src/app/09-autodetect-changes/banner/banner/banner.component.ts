import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'banner',
  template: '<h1>{{ title }}</h1>',
  styles: ['h1 { color: red; }']
})
export class BannerComponent {

  title: string = "test to banner";

  constructor() { }
}
