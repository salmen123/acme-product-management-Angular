import { Component } from '@angular/core';

import { ProductListComponent } from './products/product-list.component';

@Component({
  imports: [
    ProductListComponent
  ],
  selector: 'pm-root',
  standalone: true,
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
