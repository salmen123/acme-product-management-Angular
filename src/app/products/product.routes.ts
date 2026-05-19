import { Routes } from '@angular/router';

import { ProductDetailComponent } from './product-detail.component';
import { productDetailGuard } from './product-detail.guard';
import { ProductListComponent } from './product-list.component';

export const productRoutes: Routes = [
  { path: 'products', component: ProductListComponent, title: 'APM: Product List' },
  {
    path: 'products/:id',
    canActivate: [ productDetailGuard ],
    component: ProductDetailComponent
  }
];
