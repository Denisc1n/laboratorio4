import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../../classes/country';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css'],
})
export class ListadoEntidadComponent implements OnInit {
  @Input() countries: [];
  @Output() selectedCountry: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  seleccionarEntidad(pais: Country): void {
    this.selectedCountry.emit(pais);
  }
}
