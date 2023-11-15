import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(public heroService: HeroService, public router: Router) {}
}
