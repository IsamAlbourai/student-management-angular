import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Students } from './pages/students/students';
import { About } from './pages/about/about';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'students',
    component: Students
  },
  {
    path: 'about',
    component: About
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
