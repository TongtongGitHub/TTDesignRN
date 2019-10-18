import React, {Fragment} from "react";
import { View,Text,StyleSheet} from "react-native";
import { SafeAreaView } from 'react-navigation';
import {HeaderOption2} from '../ui/header/header';
import Button from '../ui/button';
import Storage from '../lib/storage'

export default function StorageScreen(props) {
    return (
        <SafeAreaView style={s.layout}>
            <Button title='Save' onPress={()=>{
                Storage.save({
                    key: 'test',
                    data: 'Save success',
                    expires: null
                });
            }}></Button>
            <Button title='Load' onPress={()=>{
                Storage.load({
                    key: 'test'
                }).then((value) => {
                    alert(value);
                }).catch(err=> {
                    alert(err);
                });
            }}></Button>
            <Button title='Remove' onPress={()=>{
                Storage.remove({
                    key: 'test'
                })
            }}></Button>
        </SafeAreaView>
    )
}

StorageScreen.navigationOptions = ({navigation})=>{
    return Object.assign({},HeaderOption2({
        navigation,
    }),{
        title: 'StorageScreen',
    })
}

const s = StyleSheet.create({
    layout: {
        flex:1,
        padding: 20,
        justifyContent: 'space-around',
    }
});