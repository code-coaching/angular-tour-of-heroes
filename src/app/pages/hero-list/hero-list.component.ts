import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../components/models';
import { StyledButtonComponent } from '../../components/styled-button/styled-button.component';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [CommonModule, StyledButtonComponent],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css',
})
export class HeroListComponent {
  constructor(public router: Router, public heroService: HeroService) {}

  onClickHero(hero: Hero) {
    this.heroService.selectedHero = hero;
  }
}
