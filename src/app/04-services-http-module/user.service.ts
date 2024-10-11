import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: any[] = [];
  public error = false;

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): void {
    this.http.get<any[]>(this.url).subscribe(
      (users: any[]) => {
        this.users = users;
      },
      (error) => {
        this.error = true
      }
    )
  }
}
