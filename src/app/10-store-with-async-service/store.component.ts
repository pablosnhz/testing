import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'banner',
  template: '',
})
export class StoreComponent {

  haveIceCream: boolean = false;

  checkIceCream(): void{
    setTimeout(() => {
      this.haveIceCream = true;
    }, 1000);
  }
}
