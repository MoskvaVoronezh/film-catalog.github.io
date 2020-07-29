import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor(
    private movieService: MovieService
  ) { }
  public apiUrl: string = environment.apiUrl;
  list: any = [];

  ngOnInit(): void {
    this.movieService.getMovie().subscribe(movies => { 
      this.list = movies.results;
    } );
  }

  getFullImage(img) {
    return `${this.apiUrl}${img}`; 
  }
}
