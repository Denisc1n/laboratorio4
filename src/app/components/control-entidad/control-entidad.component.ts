import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css'],
})
export class ControlEntidadComponent implements OnInit {
  public listado = new Array();
  constructor(private countryService: CountriesService) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data: any) => {
      this.listado = data;
    });
  }
}
