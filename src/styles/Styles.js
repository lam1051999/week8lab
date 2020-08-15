import {StyleSheet} from 'react-native';
import {
  SPLASHSCREEN_IMAGE_WIDTH,
  SPLASHSCREEN_IMAGE_HEIGHT,
  LOGIN_IMAGE_WIDTH,
  LOGIN_IMAGE_HEIGHT,
  FACEBOOK_ICON_WIDTH,
  FACEBOOK_ICON_HEIGHT,
  SCREEN_WIDTH,
} from '../constants/Constants';

export const SplashScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingTop: 50,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slogan: {
    textAlign: 'center',
    fontSize: 17,
  },
  image: {
    width: SPLASHSCREEN_IMAGE_WIDTH,
    height: SPLASHSCREEN_IMAGE_HEIGHT,
    marginTop: 60,
  },
  emptyView: {flexGrow: 1},
  footer: {
    fontSize: 17,
  },
});

export const LoginStyles = StyleSheet.create({
  image: {
    width: LOGIN_IMAGE_WIDTH,
    height: LOGIN_IMAGE_HEIGHT,
  },
  loginTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    width: '40%',
  },
  loginText: {
    fontSize: 17,
    marginHorizontal: 10,
  },
  facebookButtonContainer: {
    width: SCREEN_WIDTH - 120,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#4A6EA8',
  },
  facebookIcon: {
    width: FACEBOOK_ICON_WIDTH,
    height: FACEBOOK_ICON_HEIGHT,
  },
  facebookButtonText: {
    fontSize: 17,
    color: 'white',
    marginLeft: 10,
  },
});
