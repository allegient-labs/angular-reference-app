import { TestBed } from '@angular/core/testing';

import { QuoteService } from './quote.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('QuoteService', () => {
  let quoteService: QuoteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        QuoteService
      ]
    });

    quoteService = TestBed.get(QuoteService);
    httpMock = TestBed.get(HttpTestingController);
  });

  describe('getRandomQuote', () => {
    it('should return a random Chuck Norris quote', (done: DoneFn) => {
      quoteService.getRandomQuote({ category: 'dev' })
        .subscribe(res => {
          expect(res).toBe('Chuck Norris doesn\'t pair program.');
          done();
        });

      const req = httpMock.expectOne('https://api.chucknorris.io/jokes/random?category=dev');

      req.flush({
        icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
        id: '2aDeXc2WR_uo7gfgFKfYBA',
        url: 'https://api.chucknorris.io/jokes/2aDeXc2WR_uo7gfgFKfYBA',
        value: 'Chuck Norris doesn\'t pair program.'
      });
      httpMock.verify();
    });
  });

});
