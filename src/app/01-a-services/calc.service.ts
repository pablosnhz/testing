import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private sharedService: SharedService) { }

  multiply(a: number, b: number){
    this.sharedService.sharedFunction();
    return a * b;
  }
}
