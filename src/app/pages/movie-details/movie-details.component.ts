import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Location } from '@angular/common';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 3,
    speed: 400,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 480px
      900: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 4,
        spaceBetween: 10
      },

      1500: {
        slidesPerView: 5,
        spaceBetween: 10
      }
    }
  }

  public movieId: number;
  public movieInfo: any;
  public movieRecommendations: any;
  public movieSimulars: any;
  public imageUrl: string;
  public genres: string = '';
  public countries: string = '';
  public isFavorite: boolean = false;

  public movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.movie = this.route.params.subscribe(params => {
      this.movieId = params['id'];
      let ids = JSON.parse(localStorage.getItem('likes'));
      if(ids !== null) {
        ids.forEach(n => {
          if(this.movieId == n) {
            this.isFavorite = true;
          }
        })
      }
      //получение информации о фильме
      this.movieService.getMovie(this.movieId).subscribe(data => {
        this.movieInfo = data;
        this.imageUrl = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

        data.genres.forEach(n => {
          this.genres += n.name + ', ';
        });
        this.genres = this.genres.substring(0, this.genres.length - 2);

        data.production_countries.forEach(n => {
          this.countries += n.name + ', ';
        });

        this.countries = this.countries.substring(0, this.countries.length - 2);

      });

      //получение рекомендации
      this.movieService.getMoviesRecommendations(this.movieId).subscribe(recommendations => {
        this.movieRecommendations = recommendations.results;
      });

      //получение похожих фильмов
      this.movieService.getMoviesSimular(this.movieId).subscribe(simulars => {
        this.movieSimulars = simulars.results;
      })
    });

  }
  
  public back() {
    this.location.back();
  }

  getFullImage(img) {
    return `https://image.tmdb.org/t/p/w500/${img.poster_path}`;
  }

  goToMovieDetails(id: number) {
    this.router.navigate([`/movie-details/`, id]);
  }

  goToFavorite() {
    this.router.navigate(['/favorites'])
  }

  saveFavority(id) {
    this.isFavorite = true;
    let likes = JSON.parse(localStorage.getItem('likes'));

    if(likes.includes(id)) {
      return;
    }

    if(likes === null) {
      localStorage.setItem('likes', JSON.stringify([id]));
    } else {
      likes.push(id);
      localStorage.setItem('likes', JSON.stringify(likes));
    }

  }

  ngOnDestroy() {
    this.movie.unsubscribe();
  }

}
