export const getGenresByIds = (genres = [], genreIds = []) => {
  const genresResult = genres.filter((genre) => genreIds.indexOf(genre.id) !== -1);
  const genresOfMovie = genresResult.map((genre) => genre.name).join(', ');
  return genresOfMovie;
};

export const getAPIData = (url, actionType) => (dispatch) => {
  clearErrors();
  fetch(url)
    .then((response) => response.json())
    .then((data) => dispatch({ type: actionType, payload: data.results }))
    .catch((error) => getErrors(error));
};
