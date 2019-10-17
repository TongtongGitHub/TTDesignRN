import React, {Fragment} from "react";
import { View,Text,StyleSheet} from "react-native";
import { SafeAreaView } from 'react-navigation';
import {HeaderOption2} from '../ui/header/header';
import AdvancedList from '../ui/advancedList';
import Icon from 'react-native-vector-icons/Ionicons'

export default function AdvancedListScreen(props) {
    return (
        <SafeAreaView style={s.layout}>
            <AdvancedList
                loadDataFunc={(param)=>{
                    return new Promise((resolve)=>{
                        setTimeout(() => {
                            let newList = [
                                {
                                    value: 'test'
                                },
                                {
                                    value: 'test'
                                },
                                {
                                    value: 'test'
                                },
                                {
                                    value: 'test'
                                }
                            ];
                             resolve(newList)
                        }, 1000);
                    })
                }}
                renderItemFunc={({item,index})=>{
                    return (
                        <View style={{flex:1,alignItems:'center',justifyContent:'center',padding:80}}><Text>{item.value}</Text></View>
                    )
                }}
            ></AdvancedList>
        </SafeAreaView>
    )
}

AdvancedListScreen.navigationOptions = ({navigation})=>{
    return Object.assign({},HeaderOption2({
        navigation,
    }),{
        title: 'AdvancedListScreen',
    })
}

const s = StyleSheet.create({
    layout: {
        flex:1,
        justifyContent: 'space-around',
    }
});