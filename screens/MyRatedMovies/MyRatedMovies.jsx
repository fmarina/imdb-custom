import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import MovieList from '../../features/MovieList';

const MyRatedMovies = () => {
  const { myRatedMovies } = useSelector((state) => state.movieListReducer);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MY RATED MOVIES</Text>
      <MovieList data={myRatedMovies} title="My Rated movies" />
    </View>
  );
};

export { MyRatedMovies };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#121212',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'uppercase',
    paddingVertical: 16,
    color: '#f4c518',
  },
});
