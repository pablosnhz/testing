import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  sharedFunction(){
    console.log('Shared function called');
  }
}
