import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // esperamos que retorne el mismo valor con el toBe exactly como === de js
  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  })

  // esperamos lo mismo con el toBe y para este caso utilizamos done para pruebas asincronas
  // suscribiendonos al observable y comprobando el valor, verificamos y damos fin a la prueba con el done
  it('#getObservableValue should return valur from observable', (done: DoneFn) => {
    service.getObservableValue().subscribe((value) => {
      expect(value).toBe('observable value');
      done();
    })
  })

  // basicamente lo mismo que el anterior pero al ser una promesa seria lo que se espera despues
  // por la promesa que espera THEN y luego damos fin a la prueba
  it('#getPromiseValue should return valur from promise', (done: DoneFn) => {
    service.getPromiseValue().then((value) => {
      expect(value).toBe('promise value');
      done();
    })
  })
});
