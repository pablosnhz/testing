import { Injectable } from '@angular/core';
import { ValueService } from '../01-services/value.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private valueService: ValueService) { }

  getValue(){
    return this.valueService.getValue();
  }

  getObservableValue(){
    return this.valueService.getObservableValue();
  }

  getPromiseValue(){
    return this.valueService.getPromiseValue();
  }
}
