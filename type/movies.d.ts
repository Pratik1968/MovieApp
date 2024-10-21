interface MovieResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieResponse {
  page: number;
  results: MovieResult[];
}

 export interface MoviesResponse {
    page:number,
    results:MovieResult[]
  }
  export interface MoviesType {
    id:number,
    title:string,
    like:boolean,
    backdrop_path:string
}
export interface MoviesState{
    value:MoviesType[],
    loading:boolean,
    error:Error|null,
}