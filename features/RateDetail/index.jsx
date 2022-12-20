import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const RateDetail = ({ rate, handleOnPress }) => {
  return (
    <Pressable onPress={handleOnPress}>
      {rate ? (
        <View style={styles.container}>
          <View style={styles.yourRateContainer}>
            <AntDesign name="star" size={24} color="#f4c518" />
            <Text style={styles.rate}>{rate}</Text>
          </View>

          <Text style={styles.yourRate}>Your rate </Text>
        </View>
      ) : (
        <AntDesign name="staro" size={24} color="#f4c518" />
      )}
    </Pressable>
  );
};

export default RateDetail;

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  yourRateContainer: { flexDirection: 'row', alignItems: 'center' },
  rate: {
    color: '#ffffffb3',
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 3,
  },
  yourRate: { color: '#ffffffb3', fontSize: 8, textAlign: 'center' },
});
