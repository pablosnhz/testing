import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { SharedService } from './shared.service';

fdescribe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // comprobamos si la multiplicacion es correcta
  it('should multiply two numbers', () => {
    const shared = new SharedService();
    const calc = new CalcService(shared);
    expect(calc.multiply(2, 3)).toBe(6);
  })

  // comprobamos que el sharedFunction se ha llamado
  it('should call the sharedFunction', () => {
    const shared = jasmine.createSpyObj('sharedService', ["sharedFunction"]);
    // const shared = new SharedService();
    // spyOn(shared, 'sharedFunction');
    const calc = new CalcService(shared);
    const result = calc.multiply(2, 3);
    expect(result).toBe(6);
    // expect(shared.sharedFunction).toHaveBeenCalled();
  })
});
