import { Routes } from '@angular/router';
import { DogComponent } from './dog/dog.component';
import { DogformComponent } from './dogform/dogform.component'; 
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'dogs',
        title: 'Dogs Page',
        component: DogComponent,
      },

    {
        path: 'dogform',
        title: 'Dog Survey Page',
        component: DogformComponent,
      },
      {
        path: 'home',
        title: 'Home Page',
        component: HomeComponent,
      }
];
