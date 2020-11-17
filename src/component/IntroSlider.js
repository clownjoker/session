import React from 'react';
import IconIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import {Image, StyleSheet, View, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Test from '../screens/TrainingScreen';
import Login from '../screens/LoginOn';

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Test Test Test Test Test Test Test Test Test Test Test Test',
    image: require('../assets/image/3.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Test Test Test Test Test Test Test Test Test Test Test Test',
    image: require('../assets/image/3.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Title 3',
    text: 'Test Test Test Test Test Test Test Test Test Test Test Test',
    image: require('../assets/image/3.png'),
    backgroundColor: '#22bcb5',
  },
];

export default class IntroSlider extends React.Component {
  state = {showHomePage: false};

  _renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <Image
          source={item.image}
          style={{resizeMode: 'cover', height: '73%', width: '100%'}}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: 'bold',
            color: '#b5b5b5',
            alignSelf: 'center',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#b5b5b5',
            fontSize: 15,
            paddingHorizontal: 30,
          }}>
          {item.text}
        </Text>
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <FontAwesome
          name="arrow-left"
          color="rgba(255, 255, 255, .9)"
          size={18}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <IconIcons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  _OnDene = () => {
    this.setState({showHomePage: true});
  };
  render() {
    if (this.state.showHomePage) {
      return <Login />;
    } else
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          activeDotStyle={{
            backgroundColor: '#1a75ff',
            width: 25,
          }}
          onDone={this._OnDene}
        />
      );
  }
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#1a75ff',
    borderRadius: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
