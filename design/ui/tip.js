import React, {
    useState,Fragment
} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    DeviceEventEmitter,
    ActivityIndicator
} from 'react-native'
import {Colors, BorderWidth} from './global/globalStyle'
import Icon from 'react-native-vector-icons/Ionicons'

let hideTimeOut = null;

export default function Tip() {
}

function show(content,mask=false,callback) {
    clearTimeout(hideTimeOut);
    DeviceEventEmitter.emit("RNTopViewAdd", (
        <View pointerEvents={mask ? 'auto' : 'none'} style={styles.layout}>
            <View style={styles.wrap}>
                {content}
            </View>
        </View>
    ),callback && callbackFunc);
}

function hide() {
    DeviceEventEmitter.emit("RNTopViewRemove");
}

function callbackFunc(duration = 2000) {
    hideTimeOut = setTimeout(() => {
        hide();
    }, 2000);
}

Tip.showLoading = ()=>{
    show(<ActivityIndicator size='large'></ActivityIndicator>, true)
}

Tip.hideLoading = ()=>{
    hide();
}

Tip.message = (message)=>{
    show(<Text style={styles.text}>{message}</Text>, false, true)
}

Tip.success = (message)=>{
    show(
        <Fragment>
            <Icon name='ios-checkmark-circle-outline' size={40} color='#fff'></Icon>
            <Text style={styles.text}>{message}</Text>
        </Fragment>
        , false, true)
    
}

Tip.error = (message)=>{
    show(
        <Fragment>
            <Icon name='ios-close-circle-outline' size={40} color='#fff'></Icon>
            <Text style={styles.text}>{message}</Text>
        </Fragment>
        , false, true)
}

Tip.info = (message)=>{
    show(
        <Fragment>
            <Icon name='ios-information-circle-outline' size={40} color='#fff'></Icon>
            <Text style={styles.text}>{message}</Text>
        </Fragment>
        , false, true)
}

const styles = StyleSheet.create({
    layout: {
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right: 0,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrap: {
        borderRadius: 3,
        margin: 15,
        padding: 10,
        backgroundColor: Colors.dark,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff'
    }
});
