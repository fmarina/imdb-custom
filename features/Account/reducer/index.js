import { GET_ACCOUNT_DETAIL } from '../actions/actionTypes';

const initialState = {
  accountDetail: {},
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT_DETAIL:
      return {
        accountDetail: action.payload,
      };
    default:
      return state;
  }
};
