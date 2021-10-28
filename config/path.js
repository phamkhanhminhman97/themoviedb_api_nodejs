// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/
const API_KEY = process.env.API_KEY;

const API_URL = 'https://api.themoviedb.org/3/';

const QUERY_URL = '?api_key=' + API_KEY + '&language=en-US';

const REVIEW_QUERY_URL = 'reviews' + QUERY_URL;

const CREDIT_QUERY_URL = 'credits' + QUERY_URL;

const DISCOVER = API_URL + 'discover/movie?api_key=' + API_KEY + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate' 

const POPULAR = API_URL + 'movie/popular' + QUERY_URL;

const SEARCH = API_URL + 'search/movie?api_key=' + API_KEY + '&language=en-US';

const REVIEW = API_URL + 'movie/';

const NOW_PLAYING = API_URL + 'movie/now_playing' + QUERY_URL;

const TOP_RATED = API_URL + 'movie/top_rated' + QUERY_URL;

const MOVIE_DETAIL = API_URL + 'movie/' ;

const CREDIT = API_URL  + 'movie/';

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p';

const BACKDROP_SIZE = 'w1280';
// Sizes: w300, w780, w1280, original
const POSTER_SIZE = 'w780';
// w92, w154, w185, w342, w500, w780, original

module.exports = {
    API_KEY,
    API_URL,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    DISCOVER,
    POPULAR,
    SEARCH,
    REVIEW,
    CREDIT,
    NOW_PLAYING,
    TOP_RATED,
    MOVIE_DETAIL,
    QUERY_URL,
    REVIEW_QUERY_URL,
    CREDIT_QUERY_URL


}