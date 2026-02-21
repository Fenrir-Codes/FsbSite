import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Loginpage } from './loginpage/loginpage';
import { Department } from './department/department';

export const routes: Routes = [
  { path: '', component: Home },             // Home page
  { path: 'about', component: About },       // "Om fsb" page
  { path: 'contact', component: Contact }, // Contact page
  { path: 'login', component: Loginpage },
  { path: 'depatment', component: Department },  // to login page
  { path: '**', redirectTo: '' }             // non existent url, returning us to landingpage Home
];