import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyRatedMovies as MyRatedMoviesComponent } from './MyRatedMovies';
import { getRatedMovies } from '../../features/MovieList/actions/actionCreators';

const MyRatedMoviesScreen = () => {
  const dispatch = useDispatch();
  const { sessionId } = useSelector((state) => state.authenticationReducer);
  const { accountDetail } = useSelector((state) => state.accountReducer);
  const accountId = accountDetail.id;

  useEffect(() => {
    dispatch(getRatedMovies(accountId, sessionId));
  }, []);

  return <MyRatedMoviesComponent />;
};

export default MyRatedMoviesScreen;
