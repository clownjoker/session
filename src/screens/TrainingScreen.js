import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Slider from '../component/slide';

import {translate} from '../lang';

const {width} = Dimensions.get('window');

function TrainingScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView
          horizontal
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}>
          <Slider img={require('../assets/image/MeetingRoom.jpg')} />
          <Slider img={require('../assets/image/TrainingRoom.jpg')} />
        </ScrollView>
      </View>
      <View style={styles.contentBtn}>
        <TouchableOpacity
          onPress={() => navigation.navigate('session')}
          style={styles.btn1}>
          <Text style={styles.titleBtn}>
            {translate('login_to_session_is_available')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.navigate('sessionDetails')}>
          <Text style={{color: '#1da1f2', fontWeight: 'bold', fontSize: 17}}>
            {translate('create_new_session')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  slider: {
    flex: 0.6,
    backgroundColor: '#fff',
  },
  contentBtn: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 40,
  },
  btn1: {
    width: 240,
    height: 42,
    backgroundColor: '#1da1f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    elevation: 2,
  },
  btn2: {
    width: 240,
    height: 42,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,

    borderWidth: 2,
    borderColor: '#1da1f2',
  },

  titleBtn: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
export default TrainingScreen;
