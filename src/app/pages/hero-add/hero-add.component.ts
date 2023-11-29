import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StyledButtonComponent } from '../../components/styled-button/styled-button.component';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-add',
  standalone: true,
  imports: [CommonModule, FormsModule, StyledButtonComponent],
  templateUrl: './hero-add.component.html',
  styleUrl: './hero-add.component.css',
})
export class HeroAddComponent {
  name: string = '';

  constructor(
    public location: Location,
    private heroService: HeroService,
  ) {}

  saveHero(name: string) {
    this.heroService.addHero(name).subscribe(() => {
      this.location.back();
    });
  }
}
