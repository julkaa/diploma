import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user;
  gender;

  constructor(private userService: UserService) {
    this.user = this.userService.getIdentity();
  }

  ngOnInit(): void {}
}
