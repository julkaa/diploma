import { IMovieShortInfo } from './movie-short-info.interface';
export interface IMovieGroup {
  Response: string;
  Search: Array<IMovieShortInfo>;
  totalResults: string;
  Error?: string;
}
