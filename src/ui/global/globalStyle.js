import { StyleSheet, Platform } from 'react-native';
import isIphoneX from './isIphoneX'

export const Colors = {
    red: '#F24C3D',
    blue:'#0D4680',
    blueL:'#1470cc',
    gray:'#a1aab2',
    grayL: '#B3B3B3',
    grayLL:'#CED3D9',
    grayLLL:'#DAE0E6',
    dark: '#222222',
    darkL: '#555555',
    darkLL: '#888888',
    white: '#ffffff',
    whiteD: '#f5f7fa'
}
export const BorderWidth = Platform.OS === 'ios'? 0.5:1;

export const FixedTop = isIphoneX() ? 44 : (isStatusBarSolid ? 0 : (Platform.OS === 'android' ? 24 : 20));
export const FixedBottom = isIphoneX() ? 34 : 0;