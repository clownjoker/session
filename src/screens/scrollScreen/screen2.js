import React from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.text}> 2</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,

    backgroundColor: 'rgba(0, 153, 255,0.6)',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Screen2;
