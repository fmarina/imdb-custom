import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { MovieItem as MovieItemComponent } from './MovieItem';

const MovieItem = ({ id, imgPath, title, rating, genres, favorite, rate }) => {
  const navigation = useNavigation();
  const { sessionId } = useSelector((state) => state.authenticationReducer);
  const { accountDetail } = useSelector((state) => state.accountReducer);
  const { id: accountId } = accountDetail;

  const navigateToMovieDetail = () =>
    navigation.navigate('MovieDetail', { screen: 'MovieDetail', id, rating: rate, favorite });

  const navigateToRateAMovie = () =>
    sessionId && accountId
      ? navigation.navigate('RateAMovie', { screen: 'RateAMovie', id, title, rate })
      : navigation.navigate('Authentication');

  return (
    <MovieItemComponent
      movieId={id}
      imgPath={imgPath}
      title={title}
      rating={rating}
      genres={genres}
      favorite={favorite}
      rate={rate}
      navigateToMovieDetail={navigateToMovieDetail}
      navigateToRateAMovie={navigateToRateAMovie}
    />
  );
};

export default MovieItem;
