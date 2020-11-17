import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TrainingScreen from '../screens/TrainingScreen';
import IntroSlider from '../component/IntroSlider';
import Test from '../screens/Tesr';
import Login from '../screens/LoginOn';
import LoginSesion from '../screens/loginSesstion';
import SessionDetails from '../screens/SessionDetails';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Intro" component={IntroSlider} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Training" component={TrainingScreen} />
        <Stack.Screen name="session" component={LoginSesion} />
        <Stack.Screen name="sessionDetails" component={SessionDetails} >
         
        </Stack.Screen>
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="profile" component={Profile}/> 
         
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
