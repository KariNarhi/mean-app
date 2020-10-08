import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  User_Register_Request,
  User_Auth_Response,
  User_Login_Request,
  User_Register_Response,
  User_LocalStorage, User_Profile
} from '../models/user';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authToken: string;
  user: User_LocalStorage;

  constructor(private http: HttpClient) { }

  registerUser(
    user: User_Register_Request
  ): Observable<User_Register_Response> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<User_Register_Response>(
      'http://localhost:3000/users/register',
      user,
      {
        headers: headers,
      }
    );
  }

  authenticateUser(user: User_Login_Request): Observable<User_Auth_Response> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<User_Auth_Response>(
      'http://localhost:3000/users/authenticate',
      user,
      {
        headers: headers,
      }
    );
  }

  getProfile(): Observable<User_Profile> {
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken,
    });
    return this.http.get<User_Profile>(
      'http://localhost:3000/users/profile',
      {
        headers: headers,
      }
    );
  }

  storeUserData(token: string, user: User_LocalStorage) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token: string = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(): boolean {
    if (localStorage.id_token == undefined) {
      return false;
    } else {
      const helper = new JwtHelperService();
      return !helper.isTokenExpired(localStorage.id_token);
    }
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
