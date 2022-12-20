import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Button from '../commons/components/Button';
import RateDetail from '../RateDetail';
import Favorite from '../Favorite';
import Cast from '../Cast';

const MovieDetail = ({
  movieDetail,
  rating,
  favorite,
  imgBaseUrl,
  goToMovieHomepage,
  goToRateAMovie,
}) => {
  const {
    genres,
    homepage,
    overview,
    poster_path,
    release_date,
    runtime,
    tagline,
    title,
    vote_average,
    id: movieId,
  } = movieDetail;

  const imgPath = imgBaseUrl + poster_path;

  const yearReleased = release_date?.slice(0, 4);

  const genreMovie = genres?.map(({ id, name }) => (
    <Text key={id} style={styles.genres}>
      {name}
    </Text>
  ));

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.yearReleased}>({yearReleased})</Text>
      </View>
      <Image source={{ uri: imgPath }} style={styles.poster} />

      <View style={styles.actionsContainer}>
        <View style={styles.rateImdbContainer}>
          <AntDesign name="star" size={24} color="#f4c518" />
          <Text style={styles.rateImdb}>{vote_average}</Text>
        </View>
        <View>
          <RateDetail rate={rating} handleOnPress={() => goToRateAMovie(movieId, title, rating)} />
        </View>
        <Favorite movieId={movieId} favorite={favorite} />
      </View>

      <Text style={styles.tagline}>"{tagline}"</Text>
      <Text style={styles.duration}>Duration: {runtime}min </Text>
      {homepage ? (
        <Button onPress={goToMovieHomepage}>
          <Text style={styles.homepageMovie}>{homepage}</Text>
        </Button>
      ) : null}
      <View style={styles.genreContainer}>{genreMovie && genreMovie}</View>
      <Text style={styles.overview}>{overview}</Text>
      <View style={styles.castContainer}>
        <Cast id={movieId} />
      </View>
    </ScrollView>
  );
};

export { MovieDetail };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
    color: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    padding: 16,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  yearReleased: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
  },
  poster: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '80%',
    marginVertical: 20,
  },
  rateImdbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rateImdb: {
    color: '#ffffffb3',
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 3,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    text: {
      fontSize: 16,
      fontWeight: '700',
    },
  },
  tagline: {
    padding: 8,
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '700',
    color: '#fff',
  },
  duration: {
    fontSize: 16,
    color: '#fff',
  },
  homepageMovie: {
    padding: 8,
    color: 'blue',
    fontSize: 16,
    fontStyle: 'italic',
  },
  overview: {
    padding: 20,
    fontSize: 20,
    lineHeight: 24,
    color: '#fff',
    textAlign: 'justify',
  },
  genreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  genres: {
    paddingHorizontal: 16,
    color: '#fff',
  },
  castContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
