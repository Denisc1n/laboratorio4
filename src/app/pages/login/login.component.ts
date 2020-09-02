import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../classes/user';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  public userCreds: User;

  constructor(private router: Router) {}

  login() {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['/bienvenido']);
    } else {
      this.router.navigate(['/error']);
    }
  }
  ngOnInit(): void {}
}
