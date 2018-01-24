import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

const routes = {
  quote: (c: RandomQuoteContext) => `https://api.chucknorris.io/jokes/random?category=${c.category}`
};

export interface RandomQuoteContext {
  // The quote's category: 'nerdy', 'explicit'...
  category: string;
}

export interface ChuckNorrisResponse {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

@Injectable()
export class QuoteService {

  constructor(private http: HttpClient) { }

  getRandomQuote(context: RandomQuoteContext): Observable<string> {
    return this.http.get<ChuckNorrisResponse>(routes.quote(context))
      .pipe(
        map(res => res.value),
        catchError(() => of('Error, could not load joke :-('))
      );
  }
}
