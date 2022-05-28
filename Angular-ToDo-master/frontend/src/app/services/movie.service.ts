import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../interfaces/movie.interface';
import { HttpClient } from '@angular/common/http';
import { OmdbService } from './omdb.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = 'http://localhost:3000/movies';

  constructor(private http: HttpClient, private omdb: OmdbService) {}

  getMovies(): Observable<Array<IMovie>> {
    return this.http.get<Array<IMovie>>(this.url);
  }

  getRunningMovies(page: number): Observable<Array<IMovie>> {
    return this.http.get<Array<IMovie>>(
      `${this.url}/?run=${true}&_page=${page}&_limit=5`
    );
  }

  getMoviesR(): Observable<Array<IMovie>> {
    return this.http.get<Array<IMovie>>(`${this.url}/?run=${true}`);
  }

  addMovies(movieID: string): any {
    this.omdb.getOneMovie(movieID).subscribe(
      (movie) => {
        this.http.post<IMovie>(this.url, movie).subscribe(
          () => this.getMovies(),
          (err) => console.log(err)
        );
      },
      (err) => console.log(err)
    );
  }

  getOneMovie(id: number): Observable<IMovie> {
    return this.http.get<IMovie>(`${this.url}/${id}`);
  }

  updateMovie(movie: IMovie): Observable<IMovie> {
    return this.http.put<IMovie>(`${this.url}/${movie.id}`, movie);
  }

  deleteMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
