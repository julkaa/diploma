import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    date: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  signUp() {
    console.log(this.user);
    this.userService.signUp(this.user).subscribe(
      (res) => {
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
