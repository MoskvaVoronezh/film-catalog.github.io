import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public apiUrl: string = environment.apiUrl;
  public apiKey: string = environment.apiKey;

  constructor(
    private http: HttpClient
  ) { }
    
  getMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}discover/movie?api_key=${this.apiKey}&language=en-us&with_genres=`);
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}movie/${id}?api_key=${this.apiKey}&language=en-US`);
  }

  getMoviesRecommendations(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}movie/${id}/recommendations?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  getMoviesSimular(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}movie/${id}/similar?api_key=${this.apiKey}&language=en-US&page=1`)
  }

  search(value): Observable<any> {
    return this.http.get(`${this.apiUrl}search/movie?api_key=${this.apiKey}&language=en-US&query=${value}&page=1&include_adult=false`);
  }
  
}
