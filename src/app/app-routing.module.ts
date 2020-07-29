import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { MoviesListComponent } from './pages/movies-list/movies-list.component';

const routes: Routes = [
   {
      path: 'list',
      component: MoviesListComponent
   },
   {
      path: '**',
      redirectTo: 'list'
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   providers: [],
   exports: [RouterModule]
})
export class AppRoutingModule { }
