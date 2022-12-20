import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MovieList from '../../features/MovieList';

const PopularMovies = () => {
  const { popularMovies } = useSelector((state) => state.movieListReducer);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Most Popular Movies</Text>
      <MovieList data={popularMovies} title="Popular Movies" />
    </View>
  );
};

export { PopularMovies };

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
