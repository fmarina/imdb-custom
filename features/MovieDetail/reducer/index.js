import { GET_MOVIE_DETAILS } from '../actions/actionTypes';

const initialState = {
  movieDetail: [],
};

export const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return {
        movieDetail: action.payload,
      };
    default:
      return state;
  }
};
