import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [
    RouterLink,
    RouterOutlet
  ],
  selector: 'pm-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
        <li><a class='nav-link' routerLink='/products'>Product List</a></li>
      </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
