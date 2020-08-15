import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {SplashScreenStyles as styles} from '../styles/Styles';
import Animated, {
  Clock,
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  debug,
  stopClock,
  block,
  Easing,
} from 'react-native-reanimated';

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 500,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(
      clockRunning(clock),
      [set(config.toValue, dest)],
      [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock),
      ],
    ),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position,
  ]);
}

export default function SplashScreen({navigation}) {
  const _scale = runTiming(new Clock(), 0.5, 1);
  useEffect(() => {
    async function retrieveToken() {
      const token = await AsyncStorage.getItem('@token');
      navigation.navigate('appswitch', {
        userToken: token,
      });
    }
    setTimeout(retrieveToken, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Application</Text>
      <Text style={styles.slogan}>
        Make your business successful, make your dream come true
      </Text>
      <Animated.Image
        style={[
          styles.image,
          {
            transform: [
              {
                scale: _scale,
              },
            ],
          },
        ]}
        source={require('../assets/splashscreen.png')}
        resizeMode="cover"
      />
      <View style={styles.emptyView} />
      <Text style={styles.footer}>Powered by TranLamInc 🇻🇳</Text>
    </View>
  );
}
