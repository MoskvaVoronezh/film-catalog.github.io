import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-favorite',
  templateUrl: './movies-favorite.component.html',
  styleUrls: ['./movies-favorite.component.scss']
})
export class MoviesFavoriteComponent implements OnInit {

  moviesIds: any;
  movies: any = [];
  constructor(
    private location: Location,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.moviesIds = JSON.parse(localStorage.getItem('likes'));
    console.log(this.moviesIds);

    this.moviesIds.forEach(id => {
      this.movieService.getMovie(id).subscribe(data => {
        this.movies.push(data);
      })
    });
  }

  back() {
    this.location.back();
  }


  deleteMovie(id) {
    let storage = JSON.parse(localStorage.getItem('likes'));
    const index = storage.findIndex(n => n.id == id);
    storage.splice(index, 1);
    localStorage.setItem('likes', JSON.stringify(storage));
    window.location.reload();

  }
}
