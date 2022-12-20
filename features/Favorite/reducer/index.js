import { GET_MY_FAVORITE_MOVIES } from '../actions/actionTypes';

const initialState = {
  myFavoriteMovies: [],
  myFavoriteMoviesIds: [],
};

export const favoriteMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_FAVORITE_MOVIES:
      return {
        ...state,
        myFavoriteMovies: action.payload,
        myFavoriteMoviesIds: action.payload.map((movie) => movie.id),
      };
    default:
      return state;
  }
};
