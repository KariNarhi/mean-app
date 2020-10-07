import { Injectable } from '@angular/core';
import User from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  constructor() {}

  validateRegister(user: User): Boolean {
    if (
      user.name === undefined ||
      user.email === undefined ||
      user.username === undefined ||
      user.password === undefined
    ) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email: string): Boolean {
    const re: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
