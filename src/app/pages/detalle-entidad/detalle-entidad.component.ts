import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../../classes/country';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css'],
})
export class DetalleEntidadComponent implements OnInit {
  @Input() pais: Country;
  @Output() salidaPais: EventEmitter<any> = new EventEmitter();
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private countryService: CountriesService
  ) {}

  ngOnInit() {
    this.getCountryDetail();
  }

  getCountryDetail(): void {
    const id = this.route.snapshot.paramMap.get('code');
    this.countryService
      .getCountriesById(id)
      .subscribe((pais) => (this.pais = pais));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    // this.countryService.updateHero(this.hero).subscribe(() => this.goBack());
  }
  handlePais(pais: any) {
    this.salidaPais.emit(pais);
  }
}
