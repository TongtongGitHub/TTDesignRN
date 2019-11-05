import React, {Fragment} from "react";
import { View,Text,StyleSheet} from "react-native";
import { SafeAreaView } from 'react-navigation';
import {HeaderOption2} from '../ui/header/header';
import Button from '../ui/button';
import Icon from 'react-native-vector-icons/Ionicons'
import Tip from '../ui/tip'

export default function TipScreen(props) {
    return (
        <SafeAreaView style={s.layout}>
            <Button title='Loading' onPress={()=>{
                Tip.showLoading();
                setTimeout(() => {
                    Tip.hideLoading();
                }, 2000);
            }}></Button>
            <Button title='Message' onPress={()=>{
                Tip.message('this is a message')
            }}></Button>
            <Button title='Success' onPress={()=>{
                Tip.success('this is a success message')
            }}></Button>
            <Button title='Error' onPress={()=>{
                Tip.error('this is a error message')
            }}></Button>
            <Button title='Info' onPress={()=>{
                Tip.info('this is an info message')
            }}></Button>
        </SafeAreaView>
    )
}

TipScreen.navigationOptions = ({navigation})=>{
    return Object.assign({},HeaderOption2({
        navigation,
    }),{
        title: 'Tip',
    })
}

const s = StyleSheet.create({
    layout: {
        flex:1,
        padding: 20,
        justifyContent: 'space-around',
    }
});