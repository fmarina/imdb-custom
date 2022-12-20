import { API_KEY, TMDB_API_URL } from '@env';
import { GET_ACCOUNT_DETAIL } from './actionTypes';
import { clearErrors, getErrors } from '../../commons/actions/error';

export const getAccountDetail = (sessionId) => (dispatch) => {
  clearErrors();
  fetch(`${TMDB_API_URL}/3/account?api_key=${API_KEY}&session_id=${sessionId}`)
    .then((response) => response.json())
    .then((result) =>
      dispatch({
        type: GET_ACCOUNT_DETAIL,
        payload: result,
      })
    )
    .catch((error) => getErrors(error));
};
