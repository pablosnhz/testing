import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('UserService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let userService: UserService;

  // beforeEach se ejecuta por cada una de las pruebas
  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // userService = TestBed.inject(UserService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    userService = new UserService(httpClientSpy as any);
  });

  it('should return expected users (httpClient called once', () => {
    const expectedUsers = [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
    ];

    httpClientSpy.get.and.returnValue(of(expectedUsers));

    userService.getUsers();

    expect(userService.users.length).toBe(2);
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(throwError(errorResponse));

    userService.getUsers();
    expect(userService.users.length).toBe(0);
  })
});
