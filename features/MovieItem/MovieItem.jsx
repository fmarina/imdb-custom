import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Favorite from '../Favorite';
import RateDetail from '../RateDetail';

const MovieItem = ({
  movieId,
  imgPath,
  title,
  rating,
  genres,
  favorite,
  rate,
  navigateToMovieDetail,
  navigateToRateAMovie,
}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={navigateToMovieDetail}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.posterContainer}>
          <Image source={{ uri: imgPath }} style={styles.poster} />
        </View>

        <View style={styles.actionsContainer}>
          <View style={styles.rateImdbContainer}>
            <AntDesign name="star" size={24} color="#f4c518" />
            <Text style={styles.rating}>{rating}</Text>
          </View>
          <View>
            <RateDetail rate={rate} handleOnPress={navigateToRateAMovie} />
          </View>
          <Favorite movieId={movieId} favorite={favorite} />
        </View>

        <Text style={styles.genres}>{genres}</Text>
      </Pressable>
    </View>
  );
};

export { MovieItem };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    padding: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 18,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginVertical: 24,
    textAlign: 'center',
  },
  posterContainer: {
    alignItems: 'center',
  },
  poster: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 16,
  },
  rateImdbContainer: { flexDirection: 'row', alignItems: 'center' },
  rating: {
    color: '#ffffffb3',
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 6,
  },
  genres: { fontSize: 14, color: '#fff', textAlign: 'center' },
});
