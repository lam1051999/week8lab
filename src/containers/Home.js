import React from 'react';
import {View, Text, Button} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home({setUserTk, userTk}) {
  async function logOut() {
    await LoginManager.logOut();
    await AsyncStorage.removeItem('@token');
    setUserTk('');
  }

  return (
    <View>
      <Text>Home screen</Text>
      <Text>user token: {userTk}</Text>
      <Button title="log out" onPress={logOut} />
    </View>
  );
}
