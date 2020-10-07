import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import User from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  username: string;
  password: string;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit(): void {}

  onRegisterSubmit() {
    const user: User = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
    };

    // Check fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please fill-in all fields', {
        cssClass: 'alert-danger',
        timeout: 3000,
      });
      return false;
    }

    // Check email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Invalid Email', {
        cssClass: 'alert-danger',
        timeout: 3000,
      });
      return false;
    }
  }
}
