import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public ejemplo = 'Hola Mundo';
  public ejemplo2 = 'Hola Mundo';
  constructor() {}

  ngOnInit() {}

  PruebaClick() {
    this.ejemplo2 = 'Ejecutamos el evento!!!';
  }
}
