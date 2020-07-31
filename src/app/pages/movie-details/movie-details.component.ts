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

  ngOnInit(): void {
    this.movieId = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(this.movieId).subscribe(data => {
      this.movieInfo = data;
      console.log(this.movieInfo);
    });
  }
  

}
