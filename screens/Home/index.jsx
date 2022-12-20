import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../features/commons/components/Button';
import { getAccountDetail } from '../../features/Account/actions/actionCreator';
import { getMyFavoritesMovies } from '../../features/Favorite/actions/actionCreators';
import { getGenres, getImagesBaseUrl } from '../../features/MovieList/actions/actionCreators';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { sessionId } = useSelector((state) => state.authenticationReducer);
  const { accountDetail } = useSelector((state) => state.accountReducer);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getImagesBaseUrl());
  }, []);

  useEffect(() => {
    dispatch(getAccountDetail(sessionId));
  }, [sessionId]);

  useEffect(() => {
    if (accountDetail.id && sessionId) dispatch(getMyFavoritesMovies(accountDetail.id, sessionId));
  }, [accountDetail, sessionId]);

  return (
    <View style={styles.container}>
      {sessionId ? (
        <Button onPress={() => navigation.navigate('Account')} style={styles.button}>
          <Text style={styles.buttonText}>Account</Text>
        </Button>
      ) : (
        <Button onPress={() => navigation.navigate('Authentication')} style={styles.button}>
          <Text style={styles.buttonText}>Login/Register</Text>
        </Button>
      )}
      <Button onPress={() => navigation.navigate('TopRatedMovies')} style={styles.button}>
        <Text style={styles.buttonText}>Top Rated Movies</Text>
      </Button>
      <Button onPress={() => navigation.navigate('PopularMovies')} style={styles.button}>
        <Text style={styles.buttonText}>Most Popular Movies</Text>
      </Button>
      <Button onPress={() => navigation.navigate('UpcomingMovies')} style={styles.button}>
        <Text style={styles.buttonText}>Upcoming Movies</Text>
      </Button>
      <Button onPress={() => navigation.navigate('Search')} style={styles.button}>
        <Text style={styles.buttonText}>Search Movie</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#121212',
  },
  button: {
    padding: 16,
    backgroundColor: '#f4c518',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
  },
  user: {
    color: 'red',
  },
});

export default HomeScreen;
