import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    const index = this.heroes.findIndex((h) => h.number === hero.number);
    if (index !== -1) {
      this.heroes[index] = structuredClone(hero);
    }
    this.saveHeroes();
  }

  deleteHero(hero: Hero) {
    this.heroes = this.heroes.filter((h) => h.number !== hero.number);
    if (this.selectedHero?.number === hero.number) {
      this.selectedHero = null;
    }
    this.saveHeroes();
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

  private saveHeroes() {
    localStorage.setItem('heroes', JSON.stringify(this.heroes));
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
