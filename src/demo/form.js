import React, {Fragment} from "react";
import { View,Text,StyleSheet} from "react-native";
import { SafeAreaView } from 'react-navigation';
import {HeaderOption2} from '../ui/header/header';
import {BasicInput} from '../ui/form';
import Icon from 'react-native-vector-icons/Ionicons'

export default function FormScreen(props) {
    return (
        <SafeAreaView style={s.layout}>
            <BasicInput placeholder='basic input'></BasicInput>
            <BasicInput placeholder='disabled' editable={false} initValue='disabled'></BasicInput>
            <BasicInput required={true} placeholder='Input with left view' leftView={(
                <View><Text>Name:</Text></View>
            )}></BasicInput>
            <BasicInput required={true} placeholder='Input with right view' rightView={(
                <View><Text>+86</Text></View>
            )}></BasicInput>
        </SafeAreaView>
    )
}

FormScreen.navigationOptions = ({navigation})=>{
    return Object.assign({},HeaderOption2({
        navigation,
    }),{
        title: 'Form',
    })
}

const s = StyleSheet.create({
    layout: {
        flex:1,
    }
});