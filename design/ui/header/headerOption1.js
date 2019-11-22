import React, {Fragment} from "react";
import { View,Text, TouchableOpacity,StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

export default function HeaderOption1({
    navigation,
    goBackFunc
}){
    StatusBar.setBarStyle('dark-content');
    return {
        headerStyle: {
            backgroundColor: '#FFF',
            height: 44,
            elevation: 0, //remove shadow on Android
            shadowOpacity: 0, //remove shadow on iOS
            borderBottomWidth: 0
        },
        headerLeft: (
            <TouchableOpacity onPress={() => {
                if (goBackFunc) {
                    goBackFunc();
                } else {
                    navigation.goBack();
                }
            }} style={{ marginLeft: 20 }}>
                <Icon name='ios-arrow-back' size={28}></Icon>
            </TouchableOpacity>
        ),
        headerRight: (
            <Fragment>
            </Fragment>
        ),
        headerTitleStyle: {
            fontWeight: 'normal',
            color: '#222',
            fontSize: 19,
            alignSelf: 'center',
            textAlign: 'center',
            flexGrow: 1
        },
        titleStyle: {
            textAlign: 'center'
        },
        headerTitleAllowFontScaling: false
    };
}