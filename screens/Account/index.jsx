import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Account from '../../features/Account';
import Button from '../../features/commons/components/Button';

const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Account />
      <View style={styles.buttonsContainer}>
        <Button onPress={() => navigation.navigate('MyFavoriteMovies')} style={styles.button}>
          <Text style={styles.buttonText}>My Favorite Movies</Text>
        </Button>
        <Button onPress={() => navigation.navigate('MyRatedMovies')} style={styles.button}>
          <Text style={styles.buttonText}>My Rated Movies</Text>
        </Button>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  buttonsContainer: { alignItems: 'center' },
  button: {
    width: '60%',
    marginVertical: 16,
    padding: 16,
    backgroundColor: '#f4c518',
    borderRadius: 10,
  },
  buttonText: { textAlign: 'center', fontSize: 18, fontWeight: '700' },
  user: { color: 'red' },
});
