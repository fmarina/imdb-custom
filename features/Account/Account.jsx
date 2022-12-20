import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const Account = ({ username, handleOnPress }) => (
  <View style={styles.container}>
    <View style={styles.userContainer}>
      <Ionicons name="person" size={40} color="white" />
      <Text style={styles.username}>{username}</Text>
    </View>
    <Pressable onPress={handleOnPress}>
      <AntDesign name="logout" size={24} color="white" />
    </Pressable>
  </View>
);

export { Account };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 18,
  },
  userContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' },
  username: { fontSize: 24, color: '#fff' },
});
