import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { debug } from 'node:console';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isMenuOpen = false; // Alaphelyzetben zárva

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log("The flag isMenuOpen:", this.isMenuOpen);
  }
}
