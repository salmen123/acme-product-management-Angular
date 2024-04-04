import { Routes } from '@angular/router';

import { ProductDetailComponent } from './products/product-detail.component';
import { productDetailGuard } from './products/product-detail.guard';
import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './home/welcome.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent, title: 'APM: Product List' },
  {
    path: 'products/:id',
    canActivate: [ productDetailGuard ],
    component: ProductDetailComponent
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
