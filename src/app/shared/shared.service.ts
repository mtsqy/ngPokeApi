import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError, forkJoin, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pokemon, PokemonId, Type } from './models';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  pokeApi: any;

  constructor(private http: HttpClient) {
    this.pokeApi = environment.pokemonUrl;
  }
  
  getPoke(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.pokeApi}pokemon/?limit=100`)
    .pipe(map((res: any) => res.results.map(p => this.setId(p))),
    catchError(this.handleError));
  }

  private setId(trgt) {
    if(!trgt['id']) {
      trgt['id'] = trgt.url.match(/\/(\d+)/)[1];
    }
    return trgt
  }

  getPokeById(id): Observable<PokemonId> {
    return this.http.get<PokemonId>(`${this.pokeApi}pokemon/${id}`)
    .pipe(
    catchError(this.handleError));
  }
  
  getPokemonsByType(type): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.pokeApi}type/${type}`)
    .pipe(map(res => res['pokemon'].map(p => this.setId(p.pokemon))),
    catchError(this.handleError));
  }

  search(queryString: string) {
    let _URL = `${this.pokeApi}pokemon/${queryString}`;
    return this.http.get(_URL);
  }

  getListofTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(`${this.pokeApi}type/`)
    .pipe(map((res: any) => res['results'].map(p => this.setId(p))),
    catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
       `Backend returned code ${error.status}, ` +
       `body was: ${error.error}`);
   }
   return throwError(
     'Something bad happened; please try again later.'
   );
  }
}
