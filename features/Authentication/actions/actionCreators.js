import { API_KEY, TMDB_API_URL } from '@env';
import { clearErrors, getErrors } from '../../commons/actions/error';
import { GET_REQUEST_TOKEN, GET_SESSION_ID, LOGIN, LOGOUT } from './actionTypes';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

export const getRequestToken = () => (dispatch) => {
  clearErrors();
  fetch(`${TMDB_API_URL}/3/authentication/token/new?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((result) =>
      result.success
        ? dispatch({ type: GET_REQUEST_TOKEN, payload: result.request_token })
        : getErrors(result.status_message)
    );
};

export const createSession = (requestToken) => (dispatch) => {
  fetch(`${TMDB_API_URL}/3/authentication/session/new?api_key=${API_KEY}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ request_token: requestToken }),
  })
    .then((response) => response.json())
    .then((result) => dispatch({ type: GET_SESSION_ID, payload: result.session_id }));
};

export const createSessionWithLogin = (username, password, token) => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=2226516417598f581d35cab98ec227b5`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        username,
        password,
        request_token: token,
      }),
    }
  )
    .then((response) => response.json())
    .then((response) => {
      response.success ? dispatch({ type: LOGIN }) : getErrors(response.status_message);
    })
    .catch((error) => getErrors(error));
};

export const logout = (sessionId) => (dispatch) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  fetch(`${TMDB_API_URL}/3/authentication/session?api_key=${API_KEY}`, {
    method: 'DELETE',
    headers,
    body: JSON.stringify({ session_id: sessionId }),
  })
    .then((response) => response.json())
    .then((result) => {
      result.success
        ? dispatch({ type: LOGOUT })
        : getErrors('An error occurred while trying to logout');
    })
    .catch((error) => getErrors(error));
};
