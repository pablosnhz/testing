import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: number) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  updateUser(id: number, updatedBody: any) {
    return this.httpClient.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedBody);
  }
}
