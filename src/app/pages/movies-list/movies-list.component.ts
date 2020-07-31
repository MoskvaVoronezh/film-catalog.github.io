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

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }
  public apiUrl: string = environment.apiUrl;
  movies: any = [];

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

  search(event) {
    // event.preventDefautl();
    console.log(event);
  }

  public number: number = 1;

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
    // console.log(id);
    let favorite = JSON.parse(localStorage.getItem('likes'));
    console.log(favorite);

    if(favorite.includes(id)) {
      return true;
    };
    // favorite.forEach(movieId => {
    //   if(movieId == id) {
    //     return 'added to favorites';
    //   } else {
    //     return '';
    //   }
    // })
  }

  goToMovieDetails(id: number) {
    this.router.navigate(['/movie-details', id]);
  }
  
}
