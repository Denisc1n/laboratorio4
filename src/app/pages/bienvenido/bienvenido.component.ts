import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css'],
})
export class BienvenidoComponent implements OnInit {
  public valorUno = 0;
  public valorDos = 0;
  public resultadoSuma = 0;
  public resultadoPromedio = 0;

  constructor(private router: Router) {}

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

  moduloPaises() {
    this.router.navigate(['/paises']);
  }
}
