import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, OnDestroy {

  public apiUrl: string = environment.apiUrl;
  movies: any = [];
  public number: number = 1;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }
  
  genres = [
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
    this.movieService.getMovies().subscribe(movies => { 
      this.movies = movies.results;
    });
  }

  ngOnDestroy():void {}

  getFullImage(img) {
    return `https://image.tmdb.org/t/p/w500/${img}`; 
  }

  search(value) {
    this.movieService.search(value).subscribe(movie => {
      this.movies = movie.results;
    });
  }

  getCategoryNames(ids: []) {

    let listGenres: string = '';
    this.genres.forEach(m => {
      ids.forEach(n => {
        if (n == m.id) listGenres += m.name + ', ';
      })
    });
    listGenres = listGenres.substring(0, listGenres.length - 2);
    return listGenres;
  }

  getFavorite(id) {
    let local = localStorage.getItem('likes');
    let favorite;
    if (local !== null && local !== undefined) {
      favorite = JSON.parse(localStorage.getItem('likes'));
    }
    
    
      if(favorite !== null && favorite !== undefined) {
        if (favorite.includes(id)) {
          return true;
        } else {
          return false;
        }
      }
      
  }

  goToMovieDetails(id: number) {
    this.router.navigate(['/movie-details', id]);
  }
  
}
