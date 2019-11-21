/**
    iPhone X | iPhone XS | iPhone XS Max | iPhone XR
    以上机型返回true
*/

import {
    Dimensions,
    Platform,
    // NativeModules,
    // DeviceInfo
} from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');

// const { PlatformConstants = {} } = NativeModules;
// const { minor = 0 } = PlatformConstants.reactNativeVersion || {};


export default isIphoneX = () =>{
    if (Platform.OS === 'web') return false;
    // if (minor >= 50) {
    //     return DeviceInfo.isIPhoneX_deprecated;
    // }
    return (
        Platform.OS === 'ios' &&
        (
            ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||(D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))||
            ((D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||(D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT))
        )
    );
}