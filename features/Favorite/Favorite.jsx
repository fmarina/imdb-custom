import { Entypo } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

const Favorite = ({ handleOnPress, heartClassName }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={handleOnPress}>
        <Entypo name={heartClassName} size={24} color="red" />
      </Pressable>
    </View>
  );
};

export { Favorite };

const styles = StyleSheet.create({
  container: {},
});
