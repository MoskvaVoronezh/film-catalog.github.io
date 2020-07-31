import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  public movieId: number;
  public movieInfo: any;
  public movieRecommendations: any;
  public movieSimulars: any;
  public imageUrl: string;
  public genres: string = '';
  public countries: string = '';

  ngOnInit(): void {
    this.movieId = +this.route.snapshot.paramMap.get('id');

    //получение информации о фильме
    this.movieService.getMovie(this.movieId).subscribe(data => {
      this.movieInfo = data;
      this.imageUrl = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
      console.log(this.movieInfo);
      
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
      this.movieRecommendations = recommendations;
      console.log(this.movieRecommendations);
    });

    //получение похожих фильмов
    this.movieService.getMoviesSimular(this.movieId).subscribe(simulars => {
      this.movieSimulars = simulars;
      console.log(this.movieSimulars);
    })
  }
  
  public back() {
    this.location.back();
  }

}
