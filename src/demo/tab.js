import React, {Fragment} from "react";
import { View,Text,StyleSheet} from "react-native";
import { SafeAreaView } from 'react-navigation';
import {
    Tab, 
    SwipeAction, 
    Select, 
    DatePicker,
    Input,
    Button,
    FormValidation,
    AdvancedList,
    ImagePlaceHolder,
    ImageGallery,
    HeaderOption2
} from '../../design/index'

export default function TabDemo(props) {
    return (
        <SafeAreaView style={s.layout}>
            <Tab tabs={['tab1', 'tab2','tab3']}>
                <View><Text>tab1</Text></View>
                <View><Text>tab2</Text></View>
                <View><Text>tab3</Text></View>
            </Tab>
        </SafeAreaView>
    )
}

TabDemo.navigationOptions = ({navigation})=>{
    return Object.assign({},HeaderOption2({
        navigation,
    }),{
        title: 'Tab',
    })
}

const s = StyleSheet.create({
    layout: {
        flex:1,
        padding: 0,
    }
});