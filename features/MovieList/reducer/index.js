import {
  GET_GENRES,
  GET_IMAGES_BASE_URL,
  GET_MOVIE_CREDITS,
  GET_POPULAR_MOVIES,
  GET_RATED_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_UPCOMING_MOVIES,
  SEARCH_MOVIE,
} from '../actions/actionTypes';

const initialState = {
  topRatedMovies: [],
  popularMovies: [],
  upcomingMovies: [],
  movieCredits: [],
  myRatedMovies: [],
  genres: [],
  imgBaseUrl: '',
  searchResults: {},
};

export const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload,
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.payload,
      };
    case GET_MOVIE_CREDITS:
      return {
        ...state,
        movieCredits: action.payload.filter(
          ({ known_for_department }) =>
            known_for_department === 'Acting' ||
            known_for_department === 'Directing' ||
            known_for_department === 'Production'
        ),
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_RATED_MOVIES:
      return {
        ...state,
        myRatedMovies: action.payload,
      };
    case GET_IMAGES_BASE_URL:
      return {
        ...state,
        imgBaseUrl: action.payload,
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};
