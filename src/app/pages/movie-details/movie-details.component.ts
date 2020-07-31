import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  public movieId: number;
  public movieInfo: any;
  public movieRecommendations: any;
  public movieSimulars: any;

  ngOnInit(): void {
    this.movieId = +this.route.snapshot.paramMap.get('id');

    //получение информации о фильме
    this.movieService.getMovie(this.movieId).subscribe(data => {
      this.movieInfo = data;
      console.log(this.movieInfo);
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
  
}
