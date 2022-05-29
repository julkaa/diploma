import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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

  login() {
    console.log(this.user);
    this.userService.login(this.user).subscribe(
      (res) => {
        console.log(res);
        console.log(res.user);
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('token', res.token);
        console.log(res.token);
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
