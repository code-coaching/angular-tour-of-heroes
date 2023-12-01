import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
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

  findHero(number: number): Hero | undefined {
    const matchingHero = this.heroes.find((h) => h.number === number);
    return structuredClone(matchingHero);
  }

  updateHero(hero: Hero) {
    return this.http
      .patch(
        `https://code-coaching.dev/api/heroes/${hero.number}`,
        {
          name: hero.name,
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        },
      )
      .pipe(
        tap(() => {
          this.selectedHero = null;
        }),
      );
  }

  deleteHero(hero: Hero) {
    return this.http
      .delete(`https://code-coaching.dev/api/heroes/${hero.number}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .pipe(
        tap(() => {
          this.selectedHero = null;
        }),
      );
  }

  addHero(name: string) {
    return this.http.post(
      'https://code-coaching.dev/api/heroes',
      { name },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      },
    );
  }

  loadHeroes() {
    const token = localStorage.getItem('token');
    if (token) {
      this.http
        .get<Array<HeroBackend>>('https://code-coaching.dev/api/heroes', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .subscribe((data) => {
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
