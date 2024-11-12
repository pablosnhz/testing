import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { USERS } from '../mock-data/user';

describe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', () => {
    service.getAllUsers().subscribe((users: any) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(2);

      const secondUser = users.find((user: any) => user.id === 2);
      expect(secondUser.name).toBe('Jane Doe');
    })

    const mockReq = testingController.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(Object.values(USERS));

    testingController.verify();
  })

  it('should get by id', () => {
    service.getUserById(1).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.name).toBe('John Doe');

    })

    const mockReq = testingController.expectOne('https://jsonplaceholder.typicode.com/users/1');
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(USERS[1]);

  })
  afterEach(() => {
    testingController.verify();
  })



  it('shoud update user', () => {
    let changes = { age: 24 };
    service.updateUser(1, changes).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.id).toBe(1);

    })

    const mockReq = testingController.expectOne('https://jsonplaceholder.typicode.com/users/1');
    expect(mockReq.request.method).toBe('PUT');
    let modifiedUser = USERS[1];
    modifiedUser.age = 24;
    expect(mockReq.request.body.age).toEqual(changes.age);
    mockReq.flush(modifiedUser);

  })
  afterEach(() => {
    testingController.verify();
  })
});
