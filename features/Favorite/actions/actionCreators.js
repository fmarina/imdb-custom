import { API_KEY, TMDB_API_URL } from '@env';
import { clearErrors, getErrors } from '../../commons/actions/error';
import { GET_MY_FAVORITE_MOVIES } from './actionTypes';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

export const getMyFavoritesMovies = (accountId, sessionId) => (dispatch) => {
  clearErrors();
  fetch(
    `${TMDB_API_URL}/3/account/${accountId}/favorite/movies?api_key=${API_KEY}&session_id=${sessionId}&sort_by=created_at.asc`
  )
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_MY_FAVORITE_MOVIES, payload: data.results }))
    .catch((error) => getErrors(error));
};

export const addFavoriteMovie = (accountId, sessionId, movieId) => (dispatch) => {
  clearErrors();
  fetch(
    `${TMDB_API_URL}/3/account/${accountId}/favorite?api_key=${API_KEY}&session_id=${sessionId}`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        media_type: 'movie',
        media_id: movieId,
        favorite: true,
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      result.success
        ? dispatch(getMyFavoritesMovies(accountId, sessionId))
        : getErrors(result.status_message);
    })
    .catch((error) => getErrors(error));
};

export const removeFavoriteMovie = (accountId, sessionId, movieId) => (dispatch) => {
  clearErrors();
  fetch(
    `${TMDB_API_URL}/3/account/${accountId}/favorite?api_key=${API_KEY}&session_id=${sessionId}`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        media_type: 'movie',
        media_id: movieId,
        favorite: false,
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      result.success
        ? dispatch(getMyFavoritesMovies(accountId, sessionId))
        : getErrors(result.status_message);
    })
    .catch((error) => getErrors(error));
};
