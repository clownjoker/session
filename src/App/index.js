import React, {Component} from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import * as RNLocalize from 'react-native-localize';

import Routes from '../Routes';
import IntroSlider from '../component/IntroSlider';
// import {translate} from './src/lang';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.setI18nConfig();
  }
  componentDidMount() {
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  }
  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    this.setI18nConfig()
      .then(() => this.forceUpdate())
      .catch((error) => {
        console.error(error);
      });
  };
  setI18nConfig = () => {};
  render() {
    return <Routes />;
  }
}
