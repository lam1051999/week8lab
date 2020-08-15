import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../containers/SplashScreen';
import AppSwitch from '../containers/AppSwitch';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="splashscreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="splashscreen" component={SplashScreen} />
      <Stack.Screen name="appswitch" component={AppSwitch} />
    </Stack.Navigator>
  );
}
