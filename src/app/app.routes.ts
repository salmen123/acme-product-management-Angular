import { Routes } from '@angular/router';

import { productRoutes } from './products/product.routes';
import { WelcomeComponent } from './home/welcome.component';

export const routes: Routes = [
  ...productRoutes,
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
