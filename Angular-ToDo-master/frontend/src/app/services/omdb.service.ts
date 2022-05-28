import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IMovieGroup } from '../interfaces/movie-group-info.interface';
import { IMovie } from '../interfaces/movie.interface';
@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  constructor(private http: HttpClient) { }

  getMovies(searchName: string): Observable<IMovieGroup> {
    const url = `http://www.omdbapi.com/?s=${searchName}&apikey=b29d3e1a`;
    return this.http.get<IMovieGroup>(url);
  }

  getOneMovie(searchID: string): Observable<IMovie> {
    const url = `http://www.omdbapi.com/?i=${searchID}&apikey=b29d3e1a`;
    return this.http.get<IMovie>(url);
  }
}
