import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {translate} from '../lang';
const {width} = Dimensions.get('window');

export default class Slide extends Component {
  render() {
    let img = this.props.img;

    return (
      <View style={styles.slider}>
        <Text
          style={{
            position: 'absolute',
            zIndex: 30,
            fontSize: 30,
            fontWeight: 'bold',
            color: '#fff',
          }}>
          {translate('photo_text_demo')}
        </Text>

        <View
          style={{
            width: width,
            height: 270,
            backgroundColor: 'rgba(0, 153, 255,0.6)',
            position: 'relative',
            zIndex: 20,
            overflow: 'scroll',
            
          }}></View>
        <Image
          // source={require(this.props.img)}
          source={img}
          style={{
            width: '100%',
            height: 270,
            zIndex: 1,
            resizeMode: 'cover',
            position: 'absolute',
            flex:0.6
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    width: width,
    height: 270,
    flex: 1,
    backgroundColor: '#000',
    position: 'relative',
    zIndex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
