import React from 'react';
import { Button as NativeButton, Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Button from '../commons/components/Button';

const Rate = ({ movieTitle, rating, handleOnPress, rateMovie, removeRate, goBack }) => {
  const arr = [...Array(10)];
  const starClassName = (index) => (index <= rating ? 'star' : 'staro');

  const stars = arr.map((star, index) => {
    index += 1;
    return (
      <Pressable key={index} onPress={() => handleOnPress(index)}>
        <AntDesign name={starClassName(index)} size={25} color="#f4c518" />
      </Pressable>
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.ratedContainer}>
        <Text style={styles.rated}>{rating === 0 ? '?' : rating}</Text>
      </View>

      <Text style={styles.rateText}>Rate this</Text>
      <Text style={styles.title}>{movieTitle}</Text>
      <View style={styles.stars}>{stars}</View>

      <Button style={styles.rateButton} onPress={rateMovie}>
        <Text style={styles.rateButtonText}>Rate</Text>
      </Button>

      <Button style={styles.removeRateButton} onPress={removeRate}>
        <Text style={styles.removeRateButtonText}>Remove rating</Text>
      </Button>

      <NativeButton onPress={goBack} title="Dismiss" />
    </View>
  );
};

export { Rate };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f1f1f',
  },
  ratedContainer: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    backgroundColor: '#f4c518',
    borderRadius: 100,
  },
  rated: {
    fontSize: 50,
    fontWeight: '700',
    color: '#1f1f1f',
  },
  rateText: {
    textTransform: 'uppercase',
    fontSize: 14,
    color: '#e3b717',
    fontWeight: '700',
  },
  title: { fontSize: 32, fontWeight: '700', marginVertical: 32, color: '#fff' },
  stars: { flexDirection: 'row' },
  rateButton: {
    marginTop: 30,
    marginBottom: 16,
    backgroundColor: '#f4c518',
    paddingVertical: 16,
    paddingHorizontal: 42,
    borderRadius: 10,
  },
  rateButtonText: { fontSize: 16, fontWeight: '700' },
  removeRateButton: {},
  removeRateButtonText: {
    color: '#e3b717',
    fontSize: 18,
    marginTop: 18,
    marginBottom: 40,
  },
});
