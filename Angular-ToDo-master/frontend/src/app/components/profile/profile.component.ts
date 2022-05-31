import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user;
  gender;
  @Input() expanded = false;
  @Output() manualToggle = new EventEmitter();

  constructor(private userService: UserService) {
    this.user = this.userService.getIdentity();
  }

  ngOnInit(): void {}

  get sidebarWidth(): number {
    return this.expanded ? 300 : 15;
  }

  toggle() {
    this.expanded = !this.expanded;
    // this.manualToggle.emit();
  }
}
