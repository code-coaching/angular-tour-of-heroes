import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent,
          ),
      },
      {
        path: 'heroes',
        loadComponent: () =>
          import('./pages/hero-list/hero-list.component').then(
            (c) => c.HeroListComponent,
          ),
      },
      {
        path: 'heroes/add',
        loadComponent: () =>
          import('./pages/hero-add/hero-add.component').then(
            (c) => c.HeroAddComponent,
          ),
      },
      {
        path: 'heroes/:id',
        loadComponent: () =>
          import('./pages/hero-details/hero-details.component').then(
            (c) => c.HeroDetailsComponent,
          ),
      },
    ],
  },
];
