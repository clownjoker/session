import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import TrainingScreen from '../TrainingScreen';

// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();

const {w} = Dimensions.get('window');
const {h} = Dimensions.get('window');

const Screen3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.text}>click to skip to Entering</Text>
      </View>
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          flex: 1,
          button: 1,
          marginBottom: 15,
          marginLeft: 10,
        }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigate('TrainingScreen')}>
          <View>
            <Text style={styles.titleBtn}>Skip</Text>
          </View>
        </TouchableOpacity>
      </View>
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
  btn: {
    width: '70%',
    height: '10%',
    borderRadius: 20,
    backgroundColor: '#ccf2ff',
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBtn: {
    color: 'rgba(0, 153, 255,0.6)',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Screen3;
