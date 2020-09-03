import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {Hero} from '../models/hero';
import {catchError, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  const;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient,
              private messageService: MessageService) {
  }

  getHero(id: number): Observable<Hero> {
    const url = this.heroesUrl + '/' + id;
    return this.httpClient.get<Hero>(url).pipe(
      tap(_ => this.log('Fetched hero id: ' + id),
        catchError(this.handleError<Hero>('Get hero id: ' + id)))
    );
  }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesUrl).pipe(tap(_ => this.log('fetched heroes'),
      catchError(this.handleError<any>('Get hero'))));
  }

  updateHero(hero: Hero): Observable<any> {
    return this.httpClient.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log('Update hero id: ' + hero.id)),
      catchError(this.handleError<any>('Update hero'))
    );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = this.heroesUrl + '/' + id;
    return this.httpClient.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log('Delete hero id: ' + id)),
      catchError(this.handleError<Hero>('Deleted hero'))
    );
  }

  searchHeroes(textSearch: string): Observable<Hero[]> {
    if (!textSearch.trim()) {
      return of([]);
    }
    return this.httpClient.get<Hero[]>(this.heroesUrl + '/?name=' + textSearch).pipe(
      tap(x => x.length ? this.log('Found heroes matching: ' + textSearch) : this.log('No heroes matching: ' + textSearch)),
      catchError(this.handleError<Hero[]>('Searching heroes', []))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log('Add hero id: ' + newHero.id)),
      catchError(this.handleError<Hero>('Add hero'))
    );
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }


  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
