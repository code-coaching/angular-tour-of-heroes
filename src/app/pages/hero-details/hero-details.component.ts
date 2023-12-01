import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { catchError, throwError } from 'rxjs';
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
    private heroService: HeroService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        this.heroService
          .findHero(id)
          .pipe(
            catchError((err) => {
              this.hero = null;
              return throwError(() => err);
            }),
          )
          .subscribe((hero) => {
            this.hero = hero;
          });
      }
    });
  }

  saveHero(hero: Hero) {
    this.heroService.updateHero(hero).subscribe(() => {
      this.location.back();
    });
  }

  deleteHero(hero: Hero) {
    this.heroService.deleteHero(hero).subscribe(() => {
      this.heroService.loadHeroes();
    });
  }
}
