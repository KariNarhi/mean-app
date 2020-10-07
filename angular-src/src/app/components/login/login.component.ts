import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User_Auth_Response, User_Login_Request } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit(): void {}

  onLoginSubmit() {
    const user: User_Login_Request = {
      username: this.username,
      password: this.password,
    };

    this.authService
      .authenticateUser(user)
      .subscribe((data: User_Auth_Response) => {
        if (data.success) {
          this.authService.storeUserData(data.token, data.user);
          this.flashMessage.show('Login success', {
            cssClass: 'alert-success',
            timeout: 5000,
          });
          this.router.navigateByUrl('/dashboard');
        } else {
          this.flashMessage.show(data.msg, {
            cssClass: 'alert-danger',
            timeout: 5000,
          });
          this.router.navigateByUrl('/login');
        }
      });
  }
}
