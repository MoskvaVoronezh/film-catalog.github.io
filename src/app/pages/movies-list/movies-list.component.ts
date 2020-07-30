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
  movies: any = [];

  genres: [
    {
      id: 28,
      name: "Action"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 16,
      name: "Animation"
    },
    {
      id: 35,
      name: "Comedy"
    },
    {
      id: 80,
      name: "Crime"
    },
    {
      id: 99,
      name: "Documentary"
    },
    {
      id: 18,
      name: "Drama"
    },
    {
      id: 10751,
      name: "Family"
    },
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 36,
      name: "History"
    },
    {
      id: 27,
      name: "Horror"
    },
    {
      id: 10402,
      name: "Music"
    },
    {
      id: 9648,
      name: "Mystery"
    },
    {
      id: 10749,
      name: "Romance"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 10770,
      name: "TV Movie"
    },
    {
      id: 53,
      name: "Thriller"
    },
    {
      id: 10752,
      name: "War"
    },
    {
      id: 37,
      name: "Western"
    }
  ]

  ngOnInit(): void {
    this.movieService.getMovie().subscribe(movies => { 
      this.movies = movies.results;
      console.log(this.movies);
    } );
  }

  getFullImage(img) {
    return `https://image.tmdb.org/t/p/w500/${img}`; 
  }

  // renderGenres(array) {
  //   console.log(array);
  //   let result = [];
  //   // for(let i = 0; i < this.genres.length; i++) {
  //   //   for(let j = 0; j < array.lenght; j++) {
  //   //     this.genres[i].id == array[j];
  //   //     console.log(this.genres[i].id == array[j]);
  //   //     console.log(true);
  //   //     result.push(this.genres[i].name);
  //   //   }
  //   // }
  //   console.log(result);
  // }
}
