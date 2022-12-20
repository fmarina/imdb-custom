import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MovieList from '../../features/MovieList';

const MyFavoriteMovies = () => {
  const { myFavoriteMovies } = useSelector((state) => state.favoriteMoviesReducer);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MY FAVORITES MOVIES</Text>
      <MovieList data={myFavoriteMovies} title="Favorite Movies" />
    </View>
  );
};

export { MyFavoriteMovies };

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
