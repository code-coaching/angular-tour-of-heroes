import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../components/models';
import { StyledButtonComponent } from '../../components/styled-button/styled-button.component';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [CommonModule, StyledButtonComponent, FormsModule],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css',
})
export class HeroDetailsComponent implements OnInit {
  hero: null | Hero = null;

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        const matchingHero = this.heroService.heroes.find(
          (h) => h.number === id
        );
        if (matchingHero) {
          this.hero = matchingHero;
        }
      }
    });
  }
}
