import { Component, OnInit } from '@angular/core';
import { IMovieShortInfo } from '../../interfaces/movie-short-info.interface';
import { IMovieGroup } from '../../interfaces/movie-group-info.interface';
import { card } from './video.animations';
import { OmdbService } from '../../services/omdb.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  animations: [card],
})
export class VideoComponent implements OnInit {
  state = 'start';
  searchName = 'movie';
  invalidStr = '';
  movies: Array<IMovieShortInfo>;
  movie = [
    {
      subscribe: 'Total Number of Subscribers: 34.9+ Million',
      about:
        'From social change to social media, TED Talks cover just about everything. You can find a vast range of videos about self-help on this international YouTube channel. The presenters sprinkle personal anecdotes into every lesson to ground their teachings in reality.',
      id: 0,
    },
    {
      subscribe: 'Total Number of Subscribers: 34.9+ Million',
      about:
        'From social change to social media, TED Talks cover just about everything. You can find a vast range of videos about self-help on this international YouTube channel. The presenters sprinkle personal anecdotes into every lesson to ground their teachings in reality.',
      id: 1,
    },
    {
      subscribe: 'Total Number of Subscribers: 34.9+ Million',
      about:
        'From social change to social media, TED Talks cover just about everything. You can find a vast range of videos about self-help on this international YouTube channel. The presenters sprinkle personal anecdotes into every lesson to ground their teachings in reality.',
      id: 2,
    },
    {
      subscribe: 'Total Number of Subscribers: 34.9+ Million',
      about:
        'From social change to social media, TED Talks cover just about everything. You can find a vast range of videos about self-help on this international YouTube channel. The presenters sprinkle personal anecdotes into every lesson to ground their teachings in reality.',
      id: 3,
    },
  ];

  constructor(
    private movieService: OmdbService,
    private mService: MovieService
  ) {}

  ngOnInit(): void {
    this.getMovie(this.searchName);
  }

  getMovie(searchName: string): void {
    if (searchName.trim()) {
      this.movies = [];
      this.invalidStr = '';
      this.movieService.getMovies(searchName).subscribe(
        (res: IMovieGroup) => {
          res.Response === 'False'
            ? (this.invalidStr = res.Error)
            : (this.movies = res.Search);
        },
        (err) => {
          console.log(err.error.Error);
        }
      );
    }
  }

  addMovie(imdbID: string): void {
    this.mService.addMovies(imdbID);
  }
}
