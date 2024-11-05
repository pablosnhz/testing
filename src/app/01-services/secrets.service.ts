import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecretsService {

  public getNumber(): number {
    return 12345;
  }
}
