import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from '../01-services/value.service';

describe('MasterService', () => {
  let masterService: MasterService;

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

  // aca creamos un fake, un mock para testearlo, lo mismo que el de arriba
  // pero casteamos con el as para que sea de tipo ValueService
  it('#getValue should return faked value from the fake object', () => {
    const fake = { getValue: () => 'real value' };
    masterService = new MasterService(fake as unknown as ValueService);
    expect(masterService.getValue()).toBe('real value');
  })

  // aca creamos un spy para valueService
  it('#getValue should return stubbed from from a spy', () => {
    const valueServiceSpy = jasmine.createSpyObj('valueService', ['getValue']);

    const stubValue = 'stub value';

    valueServiceSpy.getValue.and.returnValue(stubValue);
    masterService = new MasterService(valueServiceSpy as ValueService);

    expect(masterService.getValue()).toBe(stubValue);
    expect(valueServiceSpy.getValue.calls.count()).toBe(1);
    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
  })
});
