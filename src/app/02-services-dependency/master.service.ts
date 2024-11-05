import { Injectable } from '@angular/core';
import { ValueService } from '../01-services/value.service';
import { SecretsService } from '../01-services/secrets.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private valueService: ValueService, private secretsService?: SecretsService) { }

  getValue(){
    return this.valueService.getValue();
  }

  getObservableValue(){
    return this.valueService.getObservableValue();
  }

  getPromiseValue(){
    return this.valueService.getPromiseValue();
  }

  getSecretNumber(){
    return this.secretsService?.getNumber();
  }
}
