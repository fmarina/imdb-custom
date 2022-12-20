import { CLEAR_ERROR, GET_ERROR } from '../actions/actionTypes';

const initialState = {
  message: '',
};

export const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERROR:
      return { message: action.payload };
    case CLEAR_ERROR:
      return { message: '' };
    default:
      return state;
  }
};
