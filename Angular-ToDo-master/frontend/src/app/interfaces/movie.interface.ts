import { Data } from '@angular/router';

type R = { Source: string, Value: string };

export interface IMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<R>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Response: string;
  dateOfBroadcast?: Data;
  endOfBroadcast?: Data;
  run?: boolean;
  id?: number;
}


