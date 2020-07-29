import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  genres = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Document: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    SciFi: 878,
    TVMovie: 10770,
    Thriller: 53,
    War: 10752,
    Western: 37
  }
    
  getMovie(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=ae2577fe39de40d905bc0b37e1523a8b&language=en-us&with_genres=`);
  }
  
}
