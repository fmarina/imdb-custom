import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import MovieItem from '../MovieItem';
import { getGenresByIds } from './util';

const MovieList = ({ data }) => {
  const { genres, imgBaseUrl, myRatedMovies } = useSelector((state) => state.movieListReducer);
  const { myFavoriteMoviesIds } = useSelector((state) => state.favoriteMoviesReducer);

  const renderItem = ({ item }) => {
    const { id, title, poster_path, genre_ids, vote_average } = item;
    const imgPath = imgBaseUrl + poster_path;
    const genresOfMovie = getGenresByIds(genres, genre_ids);
    const favorite = myFavoriteMoviesIds.includes(item.id);
    const movieRated = myRatedMovies.find((movie) => movie.id === id);

    return (
      <MovieItem
        key={id}
        id={id}
        imgPath={imgPath}
        title={title}
        rating={vote_average}
        genres={genresOfMovie}
        favorite={favorite}
        rate={movieRated ? movieRated.rating : 0}
      />
    );
  };

  return <FlatList style={{ color: '#fff' }} data={data} renderItem={renderItem} />;
};

export default MovieList;
