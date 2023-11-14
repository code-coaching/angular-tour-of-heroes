import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StyledButtonComponent } from '../../components/styled-button/styled-button.component';
import { Hero } from '../../components/models';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [CommonModule, StyledButtonComponent],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css',
})
export class HeroDetailsComponent {
  hero: null | Hero = { number: 15, name: 'Magneta' };
}
