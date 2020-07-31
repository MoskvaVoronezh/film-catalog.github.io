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
    
  getMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=ae2577fe39de40d905bc0b37e1523a8b&language=en-us&with_genres=`);
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ae2577fe39de40d905bc0b37e1523a8b&language=en-US`)
  }
  
}
