import React, {Fragment} from "react";
import { View,Text,StyleSheet} from "react-native";
import { SafeAreaView } from 'react-navigation';
import {HeaderOption2} from '../ui/header/header';
import Button from '../ui/button';
import Icon from 'react-native-vector-icons/Ionicons'

export default function ButtonScreen(props) {
    return (
        <SafeAreaView style={s.layout}>
            <Button title='Default'></Button>
            <Button title='main' type='main'></Button>
            <Button title='disabled' type='main' disabled={true}></Button>
            <Button title='main' type='main' loading={true}></Button>
            <Button title='main' type='main' buttonLeft={(
                <View style={{marginBottom: -2,marginRight:5}}>
                    <Icon name='ios-arrow-back' size={20} color={'#fff'}></Icon>
                </View>
            )}></Button>
            <Button title='main' type='main' buttonRight={(
                <View style={{marginBottom: -2,marginLeft:5}}>
                <Icon name='ios-arrow-forward' size={20} color={'#fff'}></Icon>
            </View>
            )}></Button>
        </SafeAreaView>
    )
}

ButtonScreen.navigationOptions = ({navigation})=>{
    return Object.assign({},HeaderOption2({
        navigation,
    }),{
        title: 'Button',
    })
}

const s = StyleSheet.create({
    layout: {
        flex:1,
        padding: 20,
        justifyContent: 'space-around',
    }
});