import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StyledButtonComponent } from '../../components/styled-button/styled-button.component';
import { Hero } from '../../components/models';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [CommonModule, StyledButtonComponent],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css',
})
export class HeroListComponent {
  constructor(public router: Router) {}

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

  selectedHero: null | Hero = null;

  onClickHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
