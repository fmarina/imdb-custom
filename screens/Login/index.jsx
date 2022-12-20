import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../features/commons/components/Button';
import {
  getRequestToken,
  createSessionWithLogin,
} from '../../features/Authentication/actions/actionCreators';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { requestToken, sessionId } = useSelector((state) => state.authenticationReducer);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  const handleOnPress = () => {
    if (!username && !password) return;
    dispatch(createSessionWithLogin(username, password, requestToken));
    setUsername('');
    setPassword('');
  };

  useEffect(() => {
    dispatch(getRequestToken());
  }, []);

  useEffect(() => {
    if (sessionId) navigation.navigate('Home');
  }, [sessionId]);

  return (
    <View style={styles.loginContainer}>
      <TextInput
        name="username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        placeholder="username"
        placeholderTextColor="#a8a8a7"
        style={styles.input}
      />
      <View style={styles.input}>
        <TextInput
          name="password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          placeholder="password"
          placeholderTextColor="#a8a8a7"
          secureTextEntry={secure}
          style={styles.inputPassword}
        />
        <Text style={styles.eyeContainer}>
          {secure ? (
            <Pressable onPress={() => setSecure(false)}>
              <Entypo name="eye" size={24} color="black" />
            </Pressable>
          ) : (
            <Pressable onPress={() => setSecure(true)}>
              <Entypo name="eye-with-line" size={24} color="black" />
            </Pressable>
          )}
        </Text>
      </View>
      <Button onPress={handleOnPress} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 32,
  },
  input: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    padding: 16,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    backgroundColor: '#fff',
    paddingRight: 30,
    borderRadius: 4,
  },
  inputPassword: {
    paddingRight: 8,
    fontSize: 16,
  },
  loginButton: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#f4c518',
    borderRadius: 10,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default LoginScreen;
