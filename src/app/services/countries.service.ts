import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Country } from '../classes/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private countriesUrl = 'https://restcountries.eu/rest/v2/all';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getCountries(): Observable<Object[]> {
    return this.http.get<Object[]>(this.countriesUrl).pipe(
      tap((_) => this.log('CountriesService: fetched countries')),
      catchError(this.handleError<Object[]>('getCountries', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
