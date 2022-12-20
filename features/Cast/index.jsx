import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Cast = () => {
  const { imgBaseUrl, movieCredits } = useSelector((state) => state.movieListReducer);

  const credits = movieCredits.length
    ? movieCredits.map(({ character, id, known_for_department, original_name, profile_path }) => {
        const imgPath = imgBaseUrl + profile_path;
        if (character.includes('uncredited')) return;
        return (
          <View key={id} style={styles.creditsItem}>
            <Image source={{ uri: imgPath }} style={styles.profileImg} />
            <Text style={styles.originalName}>{original_name}</Text>
            <Text style={styles.character}>{character}</Text>
            <Text style={styles.department}>{known_for_department}</Text>
          </View>
        );
      })
    : null;

  return <View style={styles.container}>{credits}</View>;
};

export default Cast;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  creditsItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    margin: 6,
    borderWidth: 1,
    borderColor: '#cdcdcd',
  },
  profileImg: { resizeMode: 'contain', width: 150, height: 150 },
  originalName: { color: '#fff', fontSize: 20, fontWeight: '700', paddingVertical: 8 },
  character: { color: '#fff', fontSize: 18, fontWeight: '400', paddingBottom: 8 },
  department: { color: '#cdcdcd', fontSize: 12 },
});
