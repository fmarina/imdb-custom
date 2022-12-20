import React from 'react';
import Rate from '../../features/Rate';

const RateAMovieScreen = ({ route }) => {
  const { id, title, rate } = route.params;
  return <Rate id={id} movieTitle={title} rate={rate} />;
};

export default RateAMovieScreen;
