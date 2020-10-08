import { Component, OnInit } from '@angular/core';
import { User_Profile } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User_Profile;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(
      (profile: User_Profile) => {
        this.user = profile["user"];
      },
      (err) => {
        console.log(err);
        return false;
      }
    );
  }
}
