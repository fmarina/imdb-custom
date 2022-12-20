import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTopRatedMovies } from '../../features/MovieList/actions/actionCreators';
import { TopRatedMovies as TopRatedMoviesComponent } from './TopRatedMovies';

const TopRatedMoviesScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);

  return <TopRatedMoviesComponent />;
};

export default TopRatedMoviesScreen;
