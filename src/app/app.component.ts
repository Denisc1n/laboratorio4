import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public valorUno = 0;
  public valorDos = 0;
  public resultadoSuma = 0;
  public resultadoPromedio = 0;

  constructor() {}

  ngOnInit() {}

  calcularSumaOnClick() {
    this.resultadoSuma = this.valorUno + this.valorDos;
  }
  calcularPromedioOnClick() {
    this.resultadoPromedio = (this.valorUno + this.valorDos) / 2;
  }
  limpiarCuadrosOnClick() {
    this.resultadoSuma = 0;
    this.resultadoPromedio = 0;
    this.valorDos = 0;
    this.valorUno = 0;
  }
}
