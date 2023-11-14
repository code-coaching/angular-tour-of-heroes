import { Injectable } from '@angular/core';
import { Hero } from '../components/models';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  selectedHero: null | Hero = null;

  heroes = [
    { number: 11, name: 'Mr. Nice' },
    { number: 12, name: 'Narco' },
    { number: 13, name: 'Bombasto' },
    { number: 14, name: 'Celeritas' },
    { number: 15, name: 'Magneta' },
    { number: 16, name: 'RubberMan' },
    { number: 17, name: 'Dynama' },
    { number: 18, name: 'Dr IQ' },
    { number: 19, name: 'Magma' },
    { number: 20, name: 'Tornado' },
  ];

  topHeroes() {
    return this.heroes.slice(-4);
  }
}
