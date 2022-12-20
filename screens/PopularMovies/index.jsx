import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMostPopularMovies } from '../../features/MovieList/actions/actionCreators';
import { PopularMovies as PopularMoviesComponent } from './PopularMovies';

const PopularMoviesScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMostPopularMovies());
  }, []);

  return <PopularMoviesComponent />;
};

export default PopularMoviesScreen;
