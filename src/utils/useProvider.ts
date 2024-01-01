const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "bdaaaa2b20c386f0be9d20b50bd8dbe3";
export const IMG_PATH = "https://image.tmdb.org/t/p/w500/";

const URL_GUESS = 'authentication/guest_session/new'
const TV_SHOWS = 'discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'
export interface TMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getTrendingMovies = async () => {
  let data = [];
  try {
    const endpoint = "trending/movie/day";
    const res = await fetch(BASE_URL + endpoint + "?api_key=" + API_KEY);
    const data = await res.json();
    const movies = data.results;

    return movies;
  } catch (error) {
    console.log(error);
  }
};
export const getTvShow = async () => {
  
  try {
    const endpoint = "discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=bdaaaa2b20c386f0be9d20b50bd8dbe3";
    const res = await fetch(BASE_URL + endpoint + "&api_key=" + API_KEY);
    const data = await res.json();
    const movies = data.results;
    
    
    return movies;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const endpoint = "genre/movie/list";
    const res = await fetch(BASE_URL + endpoint + "?api_key=" + API_KEY);
    const data = await res.json();
    const categories = data.genres;
    return categories;
  } catch (error) {
    console.log(error);
  }
};


export const getMoviesByCategory = async (category:string) => {
  const endpoint = "discover/movie?with_genres=";
  const res = await fetch(
    BASE_URL + endpoint + category + "&api_key=" + API_KEY
  );
  const data = await res.json();
    return data.results
};


export const allCategoryMovies = await getCategories()
export const dataMovies = await getTrendingMovies()
export const dataTv = await getTvShow()

export const allDataDownloaded = [...dataMovies, ...dataTv]





