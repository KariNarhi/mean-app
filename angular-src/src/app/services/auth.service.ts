import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import User from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authToken: any;
  user: User;

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<HttpResponse<JSON>> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post<HttpResponse<JSON>>('http://localhost:3000/users/register', user, {
        headers: headers,
      })
      .pipe(map((res: HttpResponse<JSON>) => res));
  }
}
