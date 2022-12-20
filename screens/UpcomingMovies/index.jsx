import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UpcomingMovies as UpcomingMoviesComponent } from './UpcomingMovies';
import { getUpcomingMovies } from '../../features/MovieList/actions/actionCreators';

const UpcomingMoviesScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, []);

  return <UpcomingMoviesComponent />;
};

export default UpcomingMoviesScreen;
