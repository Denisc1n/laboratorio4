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

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService
      .getCountries()
      .subscribe((countries) => (this.countries = countries));
  }

  receiveEvent(dataReceived): void {
    console.log(dataReceived);
  }
}
