import React from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
const {w} = Dimensions.get('window');
const {h} = Dimensions.get('window');
const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.text}>1</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: w,
    height: h,
    backgroundColor: 'rgba(0, 153, 255,0.6)',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Screen1;
