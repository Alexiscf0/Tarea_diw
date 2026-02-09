import { Routes } from '@angular/router';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
  {
    path: 'hero', // Sin el slash inicial
    component: HeroPageComponent
  },
  {
    path: '**',
    redirectTo: 'hero'
  }
];