import { clearErrors, getErrors } from '../../commons/actions/error';
import { API_KEY, TMDB_API_URL } from '@env';
import { GET_MOVIE_DETAILS } from './actionTypes';

export const getMovieDetail = (movieId) => (dispatch) => {
  clearErrors();
  fetch(`${TMDB_API_URL}/3/movie/${movieId}?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_MOVIE_DETAILS, payload: data }))
    .catch((error) => getErrors(error));
};
