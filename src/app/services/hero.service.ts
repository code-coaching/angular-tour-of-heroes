import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Hero, HeroBackend } from '../components/models';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  selectedHero: null | Hero = null;
  heroes: Array<Hero> = [];

  topHeroes() {
    return this.heroes.slice(-4);
  }

  findHero(number: number) {
    return this.http.get<HeroBackend>(`/heroes/${number}`).pipe(
      map((heroBackend) => {
        const hero = {
          number: heroBackend.id,
          name: heroBackend.name,
        } satisfies Hero;
        return hero;
      }),
    );
  }

  updateHero(hero: Hero) {
    return this.http
      .patch(`/heroes/${hero.number}`, {
        name: hero.name,
      })
      .pipe(
        tap(() => {
          this.selectedHero = null;
        }),
      );
  }

  deleteHero(hero: Hero) {
    return this.http.delete(`/heroes/${hero.number}`).pipe(
      tap(() => {
        this.selectedHero = null;
      }),
    );
  }

  addHero(name: string) {
    return this.http.post('/heroes', { name });
  }

  loadHeroes() {
    const token = localStorage.getItem('token');
    if (token) {
      this.http.get<Array<HeroBackend>>('/heroes').subscribe((data) => {
        this.heroes = data.map((heroBackend) => {
          const hero = {
            number: heroBackend.id,
            name: heroBackend.name,
          } satisfies Hero;
          return hero;
        });
      });
    }
  }
}
