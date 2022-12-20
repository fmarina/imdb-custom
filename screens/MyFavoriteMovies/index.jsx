import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyFavoriteMovies as MyFavoriteMoviesComponent } from './MyFavoriteMovies';
import { getMyFavoritesMovies } from '../../features/Favorite/actions/actionCreators';

const MyFavoriteMoviesScreen = () => {
  const dispatch = useDispatch();
  const { sessionId } = useSelector((state) => state.authenticationReducer);
  const { accountDetail } = useSelector((state) => state.accountReducer);
  const accountId = accountDetail.id;

  useEffect(() => {
    dispatch(getMyFavoritesMovies(accountId, sessionId));
  }, []);

  return <MyFavoriteMoviesComponent />;
};

export default MyFavoriteMoviesScreen;
