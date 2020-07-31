import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

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
   // {
   //    path: '**',
   //    redirectTo: 'list'
   // }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   providers: [],
   exports: [RouterModule]
})
export class AppRoutingModule { }
