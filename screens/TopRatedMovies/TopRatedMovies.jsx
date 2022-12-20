import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MovieList from '../../features/MovieList';

const TopRatedMovies = () => {
  const { topRatedMovies } = useSelector((state) => state.movieListReducer);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The top rated movies</Text>
      <MovieList data={topRatedMovies} title="Top Rated Movies" />
    </View>
  );
};

export { TopRatedMovies };

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
