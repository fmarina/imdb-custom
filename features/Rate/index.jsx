import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { rateAMovie, removeRating } from '../MovieList/actions/actionCreators';
import { Rate as RateComponent } from './Rate';

const Rate = ({ id, movieTitle, rate }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { sessionId } = useSelector((state) => state.authenticationReducer);
  const { accountDetail } = useSelector((state) => state.accountReducer);
  const [rating, setRating] = useState(rate || 0);

  const handleOnPress = (index) => {
    setRating(index);
  };

  const rateMovie = () => {
    dispatch(rateAMovie(rating, id, sessionId, accountDetail.id));
    navigation.goBack();
  };

  const removeRate = () => {
    setRating(0);
    dispatch(removeRating(id, sessionId, accountDetail.id));
    navigation.goBack();
  };

  const goBack = () => navigation.goBack();

  return (
    <RateComponent
      movieTitle={movieTitle}
      rating={rating}
      handleOnPress={handleOnPress}
      rateMovie={rateMovie}
      removeRate={removeRate}
      goBack={goBack}
    />
  );
};

export default Rate;
