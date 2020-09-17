import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton-entidad',
  templateUrl: './boton-entidad.component.html',
  styleUrls: ['./boton-entidad.component.css'],
})
export class BotonEntidadComponent implements OnInit {
  @Input() entidad;
  @Output() salida: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  eliminarPais() {
    this.salida.emit(this.entidad);
  }
}
