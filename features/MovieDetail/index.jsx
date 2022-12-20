import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieDetail as MovieDetailComponent } from './MovieDetail';
import { getMovieDetail } from './actions/actionCreators';
import { useNavigation } from '@react-navigation/native';
import { getMovieCredits } from '../MovieList/actions/actionCreators';

const MovieDetail = ({ route }) => {
  const { id, rating, favorite } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { movieDetail } = useSelector((state) => state.movieDetailReducer);
  const { imgBaseUrl } = useSelector((state) => state.movieListReducer);
  const { sessionId } = useSelector((state) => state.authenticationReducer);
  const { accountDetail } = useSelector((state) => state.accountReducer);
  const { id: accountId } = accountDetail;

  const goToMovieHomepage = () => Linking.openURL(homepage);

  const goToRateAMovie = (id, movieTitle, rate) =>
    sessionId && accountId
      ? navigation.navigate('RateAMovie', { screen: 'RteAMovie', id, movieTitle, rate })
      : navigation.navigate('Authentication');

  useEffect(() => {
    dispatch(getMovieDetail(id));
    dispatch(getMovieCredits(id));
  }, []);

  return (
    <MovieDetailComponent
      movieDetail={movieDetail}
      rating={rating}
      favorite={favorite}
      imgBaseUrl={imgBaseUrl}
      goToMovieHomepage={goToMovieHomepage}
      goToRateAMovie={goToRateAMovie}
    />
  );
};

export default MovieDetail;
