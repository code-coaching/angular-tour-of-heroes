import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(public heroService: HeroService) {}
}
