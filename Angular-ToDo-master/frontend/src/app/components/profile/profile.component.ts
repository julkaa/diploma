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
  expanded = false;

  constructor(private userService: UserService) {
    this.user = this.userService.getIdentity();
  }

  ngOnInit(): void {}

  get sidebarWidth(): number {
    return this.expanded ? 0 : -137;
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
