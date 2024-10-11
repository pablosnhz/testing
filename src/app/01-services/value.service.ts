import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  constructor() { }

  public getValue(): String {
    return 'real value';
  }

  public getObservableValue(): Observable<String> {
    return of('observable value');
  }

  public getPromiseValue(): Promise<String> {
    return new Promise((resolve) => {
      resolve('promise value');
    })
  }
}
