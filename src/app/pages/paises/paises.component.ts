import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../classes/country';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
})
export class PaisesComponent implements OnInit {
  constructor(private countryService: CountriesService) {}

  public countries: Object[];
  public paisSeleccionado: Object;
  public countriesDeleted = new Array();
  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService
      .getCountries()
      .subscribe((countries) => (this.countries = countries));
  }

  receiveEvent(dataReceived): void {
    this.paisSeleccionado = dataReceived;
  }

  handleSalidaPais(pais): void {
    this.countries = this.countries.filter((paisAux) => paisAux != pais);
    if (!this.countriesDeleted.includes(pais)) {
      this.countriesDeleted.push(pais);
    }
  }
}
