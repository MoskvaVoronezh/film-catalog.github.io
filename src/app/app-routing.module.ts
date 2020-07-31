import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesFavoriteComponent } from './pages/movies-favorite/movies-favorite.component';

const routes: Routes = [
   { path: '', redirectTo: 'list', pathMatch: 'full' },
   {
      path: 'list',
      component: MoviesListComponent
   },
   {
      path: 'movie-details/:id',
      component: MovieDetailsComponent
   },
   {
      path: 'favorites',
      component: MoviesFavoriteComponent
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   providers: [],
   exports: [RouterModule]
})
export class AppRoutingModule { }
