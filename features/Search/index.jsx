import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../commons/components/Button';
import MovieList from '../MovieList';
import { searchMovie } from '../MovieList/actions/actionCreators';
import { SEARCH_MOVIE } from '../MovieList/actions/actionTypes';

const SearchMovie = () => {
  const dispatch = useDispatch();
  const { searchResults } = useSelector((state) => state.movieListReducer);
  const [query, setQuery] = useState();

  const search = () => {
    dispatch(searchMovie(query));
    setQuery('');
  };

  useEffect(() => {
    dispatch({ type: SEARCH_MOVIE, payload: {} });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search movie</Text>
      <View style={styles.inputContainer}>
        <TextInput
          name="search"
          value={query}
          onChangeText={setQuery}
          autoCapitalize="none"
          placeholder="Search a movie"
          placeholderTextColor="#a8a8a7"
          style={styles.textInput}
        />
        <Button onPress={search} style={styles.searchButton}>
          <Text style={styles.searchButton.text}>Search</Text>
        </Button>
      </View>
      {searchResults ? <MovieList data={searchResults} /> : null}
    </View>
  );
};

export default SearchMovie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#121212',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 16,
    paddingVertical: 16,
    color: '#f4c518',
  },
  inputContainer: { flexDirection: 'row', marginBottom: 18 },
  textInput: {
    width: '60%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 16,
    fontSize: 16,
    backgroundColor: '#fff',
    marginRight: 16,
  },
  searchButton: {
    backgroundColor: '#f4c518',
    padding: 18,
    borderRadius: 8,
    text: {
      fontSize: 18,
      fontWeight: '700',
    },
  },
});
