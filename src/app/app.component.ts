import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <main>
      <a [routerLink]="['/']">
    <header class="brand-name">
      <img class="brand-logo" aria-hidden="true" src="/assets/logo.svg"
           alt="logo">
    </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'homes';
}
