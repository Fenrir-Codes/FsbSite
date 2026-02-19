import { Routes } from '@angular/router';
import { Home} from './home/home';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: Home }, // Default page
  { path: 'about', component: About }, // The "Om fsb" page
];