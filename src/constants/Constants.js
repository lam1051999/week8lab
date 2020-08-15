import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SPLASHSCREEN_IMAGE_WIDTH = SCREEN_WIDTH / 2 + 60;
export const SPLASHSCREEN_IMAGE_HEIGHT =
  (SPLASHSCREEN_IMAGE_WIDTH / 7.4) * 6.819;
export const LOGIN_IMAGE_WIDTH = SCREEN_WIDTH - 60;
export const LOGIN_IMAGE_HEIGHT = (LOGIN_IMAGE_WIDTH * 274) / 318;
export const FACEBOOK_ICON_WIDTH = 35;
export const FACEBOOK_ICON_HEIGHT = FACEBOOK_ICON_WIDTH;
