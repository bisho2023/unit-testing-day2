import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Hero } from '../../hero';
import { HeroServiceForLab } from './hero.service';
import { MessageService } from 'src/app/services/message/message.service';

describe('HeroServiceForLab', () => {
  let service: HeroServiceForLab;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroServiceForLab, MessageService]
    });
    service = TestBed.inject(HeroServiceForLab);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getHeroes', () => {
    it('should return an Observable<Hero[]>', () => {
      const heroes: Hero[] = [
        { id: 1, name: 'Hero1' },
        { id: 2, name: 'Hero2' }
      ];
      service.getHeroes().subscribe(data => {
        expect(data.length).toBe(2);
        expect(data).toEqual(heroes);
      });
      const req = httpMock.expectOne('api/heroes');
      expect(req.request.method).toBe('GET');
      req.flush(heroes);
    });
  });
});
