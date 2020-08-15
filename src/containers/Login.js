import React from 'react';
import {View, Text, Image} from 'react-native';
import {SplashScreenStyles, LoginStyles as styles} from '../styles/Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';

export default function Login({setUserTk}) {
  function facebookLogin() {
    LoginManager.logInWithPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(async (data) => {
            await AsyncStorage.setItem('@token', data.accessToken.toString());
            setUserTk(data.accessToken.toString());
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  }

  return (
    <View style={SplashScreenStyles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={require('../assets/signin.png')}
      />
      <View style={styles.loginTextContainer}>
        <View style={styles.divider} />
        <Text style={styles.loginText}>LOGIN</Text>
        <View style={styles.divider} />
      </View>
      <TouchableOpacity
        onPress={() => facebookLogin()}
        style={styles.facebookButtonContainer}>
        <Image
          source={require('../assets/facebook-icon.png')}
          resizeMode="cover"
          style={styles.facebookIcon}
        />
        <Text style={styles.facebookButtonText}>Login with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}
