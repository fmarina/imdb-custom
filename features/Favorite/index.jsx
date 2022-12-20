import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Favorite as FavoriteComponent } from './Favorite';
import { useNavigation } from '@react-navigation/native';
import { addFavoriteMovie, removeFavoriteMovie } from './actions/actionCreators';

const Favorite = ({ movieId, favorite }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { sessionId } = useSelector((state) => state.authenticationReducer);
  const { accountDetail } = useSelector((state) => state.accountReducer);
  const { id: accountId } = accountDetail;
  const [isFavorite, setIsFavorite] = useState(favorite || false);
  const heartClassName = isFavorite ? 'heart' : 'heart-outlined';

  const handleOnPress = () => {
    if (sessionId && accountId) {
      isFavorite
        ? dispatch(removeFavoriteMovie(accountDetail.id, sessionId, movieId))
        : dispatch(addFavoriteMovie(accountDetail.id, sessionId, movieId));
      setIsFavorite(!isFavorite);
    } else {
      navigation.navigate('Authentication');
    }
  };

  return <FavoriteComponent handleOnPress={handleOnPress} heartClassName={heartClassName} />;
};

export default Favorite;
