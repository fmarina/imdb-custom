import { GET_REQUEST_TOKEN, GET_SESSION_ID, LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
  requestToken: '',
  sessionId: '',
  isLogin: false,
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUEST_TOKEN:
      return {
        ...state,
        requestToken: action.payload,
      };
    case GET_SESSION_ID:
      return {
        ...state,
        sessionId: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};
