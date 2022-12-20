import { configureStore } from '@reduxjs/toolkit';
import { errorsReducer } from '../features/commons/reducer/error';
import { movieDetailReducer } from '../features/MovieDetail/reducer';
import { movieListReducer } from '../features/MovieList/reducer';
import { authenticationReducer } from '../features/Authentication/reducer';
import { accountReducer } from '../features/Account/reducer';
import { favoriteMoviesReducer } from '../features/Favorite/reducer';

const store = configureStore({
  reducer: {
    errorsReducer,
    movieListReducer,
    movieDetailReducer,
    authenticationReducer,
    accountReducer,
    favoriteMoviesReducer,
  },
});

export default store;
