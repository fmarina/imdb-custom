import { API_KEY, TMDB_API_URL } from '@env';
import { clearErrors, getErrors } from '../../commons/actions/error';
import {
  GET_GENRES,
  GET_IMAGES_BASE_URL,
  GET_MOVIE_CREDITS,
  GET_POPULAR_MOVIES,
  GET_RATED_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_UPCOMING_MOVIES,
  SEARCH_MOVIE,
} from './actionTypes';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

export const getTopRatedMovies = () => (dispatch) => {
  clearErrors();
  fetch(`${TMDB_API_URL}/3/movie/top_rated?api_key=${API_KEY}&page=1`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_TOP_RATED_MOVIES, payload: data.results }))
    .catch((error) => getErrors(error));
};

export const getMostPopularMovies = () => (dispatch) => {
  clearErrors();
  fetch(`${TMDB_API_URL}/3/movie/popular?api_key=${API_KEY}&page=1`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_POPULAR_MOVIES, payload: data.results }))
    .catch((error) => getErrors(error));
};

export const getUpcomingMovies = () => (dispatch) => {
  clearErrors();
  fetch(`${TMDB_API_URL}/3/movie/upcoming?api_key=${API_KEY}&page=1`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_UPCOMING_MOVIES, payload: data.results }))
    .catch((error) => getErrors(error));
};

export const getMovieCredits = (movieId) => (dispatch) => {
  clearErrors();
  fetch(`${TMDB_API_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_MOVIE_CREDITS, payload: data.cast }))
    .catch((error) => getErrors(error));
};

export const getGenres = () => (dispatch) => {
  clearErrors();
  fetch(`${TMDB_API_URL}/3/genre/movie/list?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((result) => dispatch({ type: GET_GENRES, payload: result.genres }))
    .catch((error) => getErrors(error));
};

export const getImagesBaseUrl = () => (dispatch) => {
  clearErrors();
  fetch(`${TMDB_API_URL}/3/configuration?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((result) => {
      const { secure_base_url } = result.images;
      const imgBaseURL = `${secure_base_url}original`;
      dispatch({ type: GET_IMAGES_BASE_URL, payload: imgBaseURL });
    })
    .catch((error) => getErrors(error));
};

export const getRatedMovies = (accountId, sessionId) => (dispatch) => {
  clearErrors();
  fetch(
    `${TMDB_API_URL}/3/account/${accountId}/rated/movies?api_key=${API_KEY}&session_id=${sessionId}`
  )
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_RATED_MOVIES, payload: data.results }))
    .catch((error) => getErrors(error));
};

export const rateAMovie = (rate, movieId, sessionId, accountId) => (dispatch) => {
  clearErrors();
  fetch(`${TMDB_API_URL}/3/movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      value: rate,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        dispatch(getRatedMovies(accountId, sessionId));
      } else getErrors('There was an error trying to rate the movie');
    })
    .catch((error) => getErrors(error));
};

export const removeRating = (movieId, sessionId, accountId) => (dispatch) => {
  clearErrors();
  fetch(`${TMDB_API_URL}/3/movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`, {
    method: 'DELETE',
    headers,
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        dispatch(getRatedMovies(accountId, sessionId));
      } else getErrors('There was an error trying to rate the movie');
    })
    .catch((error) => getErrors(error));
};

export const searchMovie = (query) => (dispatch) => {
  clearErrors();
  fetch(`${TMDB_API_URL}/3/search/movie?api_key=${API_KEY}&query=${query}`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: SEARCH_MOVIE, payload: data.results }))
    .catch((error) => getErrors(error));
};
