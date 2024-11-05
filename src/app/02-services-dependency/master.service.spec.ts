import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from '../01-services/value.service';
import { of } from 'rxjs';
import { SecretsService } from '../01-services/secrets.service';

describe('MasterService', () => {
  let masterService: MasterService;
  let secretsService: SecretsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    masterService = TestBed.inject(MasterService);
  });

  it('should be created', () => {
    expect(masterService).toBeTruthy();
  });

  // aca al igual de como hicimos en el servicio value, pero aplicamos una
  // injeccion, instanciandolo por medio del new ValueService
  it('#getValue should return real value from the real service', () => {
    masterService = new MasterService(new ValueService());
    expect(masterService.getValue()).toBe('real value');
  })

  it('#getSecretNumber should return real value from the real service', () => {
    masterService = new MasterService(new ValueService(), new SecretsService());
    expect(masterService.getSecretNumber()).toBe(12345);
  })

  it('#getSecretNumber should return faked value from a fake object', () => {
    const fake = { getNumber: () => 14257};
    masterService = new MasterService(new ValueService, fake as SecretsService);
    expect(masterService.getSecretNumber()).toBe(14257);
  })

  // aca creamos un fake, un mock para testearlo, lo mismo que el de arriba
  // pero casteamos con el as para que sea de tipo ValueService
  it('#getValue should return faked value from the fake object', () => {
    const fake = { getValue: () => 'real value' };
    masterService = new MasterService(fake as unknown as ValueService);
    expect(masterService.getValue()).toBe('real value');
  })

  // aca creamos un spy para valueService
  it('#getValue should return stubbed from a spy', (done: DoneFn) => {
    const valueServiceSpy = jasmine.createSpyObj('valueService', ['getValue', 'getObservableValue', 'getPromiseValue']);

    const stubValue = 'stub value';
    const stubObservable = 'stub observable';
    const stubPromise = 'stub promise'

    valueServiceSpy.getValue.and.returnValue(stubValue);
    valueServiceSpy.getObservableValue.and.returnValue(of(stubObservable));
    valueServiceSpy.getPromiseValue.and.returnValue(Promise.resolve(stubPromise));
    masterService = new MasterService(valueServiceSpy as ValueService);

    // hacemos el de getValue
    expect(masterService.getValue()).toBe(stubValue);
    expect(valueServiceSpy.getValue.calls.count()).toBe(1);
    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);

    // hacemos el del getObservableValue
    masterService.getObservableValue().subscribe((value) => {
      expect(value).toBe(stubObservable);
      done();
    })

    // hacemos el del getPromiseValue
    masterService.getPromiseValue().then((value) => {
      expect(value).toBe(stubPromise);
    })
  })
});
