import React, {Fragment} from "react";
import { View,Text,StyleSheet} from "react-native";
import { SafeAreaView } from 'react-navigation';
import {
    ListItem, 
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

export default function ListItemDemo(props) {
    return (
        <SafeAreaView style={s.layout}>
            <ListItem label='Default Item' value='Value'></ListItem>
            <ListItem label='Press Item' value='Value' onPress={()=>{}}></ListItem>
            <SwipeAction  rightBtns={[{text:'Delete'}]}>
                <ListItem label='Swipe Item' value='Value'></ListItem>
            </SwipeAction>
        </SafeAreaView>
    )
}

ListItemDemo.navigationOptions = ({navigation})=>{
    return Object.assign({},HeaderOption2({
        navigation,
    }),{
        title: 'ListItem',
    })
}

const s = StyleSheet.create({
    layout: {
        flex:1,
        padding: 0,
    }
});