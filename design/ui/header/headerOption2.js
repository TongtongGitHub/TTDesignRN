import React, {Fragment} from "react";
import { View,Text, TouchableOpacity,StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

export default function HeaderOption2({
    navigation,
    goBackFunc
}){
    StatusBar.setBarStyle('light-content');
    return {
        headerLeft: (
            <TouchableOpacity onPress={() => {
                if (goBackFunc) {
                    goBackFunc();
                } else {
                    navigation.goBack();
                }
            }} style={{ marginLeft: 20 }}>
                <Icon name='ios-arrow-back' size={28} color='#fff'></Icon>
            </TouchableOpacity>
        ),
        headerRight: (
            <Fragment>
            </Fragment>
        ),
        headerStyle: {
            backgroundColor: '#0D4680',
            height: 44,                                                   
            elevation: 0, //remove shadow on Android
            shadowOpacity: 0, //remove shadow on iOS
            borderBottomWidth: 0
        },
        headerTitleStyle: {
            fontWeight: 'normal',
            color: '#fff',
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