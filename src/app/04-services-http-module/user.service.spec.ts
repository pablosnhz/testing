import { TestBed } from '@angular/core/testing';

import { UserService } from './../04-services-http-module/user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  // se ejecuta al final de cada prueba, en la ultima linea de cada it
  afterEach(() => httpTestingController.verify());

  it('should set Users value', () => {
    const service: UserService = TestBed.inject(UserService);
    const dummyUsers = [{ name: 'John' }, { name: 'Doe' }]

    service.getUsers();

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);
  });

  it('should set error value', () => {
    const emsg = 'deliberate 404 error';
    const service: UserService = TestBed.inject(UserService);

    service.getUsers();

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');

    req.flush(emsg, { status: 404, statusText: 'Not Found' });

    expect(service.users).toEqual([]);
    expect(service.error).toBeTruthy();
  });
});
