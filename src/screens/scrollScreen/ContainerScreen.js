import React, {Component} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';

const {w} = Dimensions.get('window');
const {h} = Dimensions.get('screen');
const {width} = Dimensions.get('window');

const ContainerScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <ScrollView
        horizontal
        snapToInterval={width}
        showsHorizontalScrollIndicator={false}>
        <Screen3 />
        <Screen2 />
        <Screen1 />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: w,
    height: h,
  },
});
export default ContainerScreen;
