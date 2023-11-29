import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { authenticationGuard } from './guards/authentication.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        canActivate: [authenticationGuard],
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent,
          ),
      },
      {
        path: 'heroes',
        canActivate: [authenticationGuard],
        loadComponent: () =>
          import('./pages/hero-list/hero-list.component').then(
            (c) => c.HeroListComponent,
          ),
      },
      {
        path: 'heroes/add',
        canActivate: [authenticationGuard],
        loadComponent: () =>
          import('./pages/hero-add/hero-add.component').then(
            (c) => c.HeroAddComponent,
          ),
      },
      {
        path: 'heroes/:id',
        canActivate: [authenticationGuard],
        loadComponent: () =>
          import('./pages/hero-details/hero-details.component').then(
            (c) => c.HeroDetailsComponent,
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.component').then((c) => c.LoginComponent),
      },
    ],
  },
];
