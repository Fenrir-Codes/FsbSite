import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Kell a navigációhoz
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Footer, RouterModule], // RouterModule bekerült
  template: `
    <div class="app-container">
      <app-navbar></app-navbar>
      
      <main class="scrollable-content">
        <router-outlet></router-outlet> 
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styleUrl: './app.css'
})
export class App {}