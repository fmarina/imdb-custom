import React, { useEffect } from 'react';
import { TMDB_URL } from '@env';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LoginScreen from '../../screens/Login';
import Button from '../../features/commons/components/Button';
import { getRequestToken } from '../../features/Authentication/actions/actionCreators';
import { createSession } from '../../features/Authentication/actions/actionCreators';

const Authentication = () => {
  const dispatch = useDispatch();
  const { requestToken, isLogin } = useSelector((state) => state.authenticationReducer);
  const URL = `${TMDB_URL}/authenticate/${requestToken}`;

  useEffect(() => {
    dispatch(getRequestToken(requestToken));
  }, []);

  useEffect(() => {
    dispatch(createSession(requestToken));
  }, [isLogin]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login / Register</Text>
      <LoginScreen />
      <Button onPress={() => Linking.openURL(URL)}>
        <Text style={styles.linkText}>TMDB Login/Register</Text>
      </Button>
    </View>
  );
};
export default Authentication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'uppercase',
    paddingVertical: 16,
    color: '#f4c518',
  },
  linkText: { marginTop: 20, fontSize: 20, color: 'lightblue', textDecorationLine: 'underline' },
});
