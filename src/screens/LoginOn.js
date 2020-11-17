import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {translate} from '../lang';
import {useNavigation} from '@react-navigation/native';

function LoginOn() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icons/IMG-20200813-WA0006.jpg')}
        style={styles.logo}
      />
      <View style={styles.contentBtn}>
        <TouchableOpacity style={styles.btn1}
         onPress={() => navigation.navigate('Training')}
         >
          <Text style={styles.titleBtn}>{translate('log_in_facebook')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2}
        onPress={() => navigation.navigate('Training')}
        >
          <Text style={{color: '#1da1f2', fontWeight: 'bold', fontSize: 16}}>
            {translate('log_in_twitter')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn3}
         onPress={() => navigation.navigate('Training')}>
          <Text style={{color: '#db4437', fontWeight: 'bold', fontSize: 16}}>
            {translate('log_in_google')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f8fa',
    flex: 1,

    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 130,
  },
  btn1: {
    width: 240,
    height: 42,
    backgroundColor: '#1da1f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    marginTop: 50,
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
  btn3: {
    width: 240,
    height: 42,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,

    borderWidth: 2,
    borderColor: '#db4437',
  },

  titleBtn: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default LoginOn;
