import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Joke } from '../app/model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  private doGet(url: string, params?): Observable<any> {
    return this.httpClient.get(url, {
      params,
      headers: { accept: 'application/json' },
    });
  }

  public getCategories(): Observable<string[]> {
    const url = 'https://api.chucknorris.io/jokes/categories';

    return this.doGet(url);
  }

  public getRandomJoke(params): Observable<Joke> {
    const url = 'https://api.chucknorris.io/jokes/random';

    return this.doGet(url, params).pipe(map(obj => Joke.fromJSON(obj)));
  }

  public getSearchedJokes(params): Observable<Joke[]> {
    const url = 'https://api.chucknorris.io/jokes/search';

    return this.doGet(url, params).pipe(map(obj => obj['result'].map(joke => Joke.fromJSON(joke))));
  }
}
