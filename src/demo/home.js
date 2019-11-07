import React, {Fragment} from "react";
import { View,Text, Touch,StyleSheet } from "react-native";
import {NavigationEvents,SafeAreaView} from 'react-navigation';
import {HeaderOption2} from '../ui/header/header'
import Button from '../ui/button'

function HomeScreen(props) {
    return (
        <SafeAreaView style={s.layout}>
            <NavigationEvents
                onWillFocus={payload=>{
                    console.log('will foucs', payload);
                    
                }}
            ></NavigationEvents>

            <Button title='Button' buttonStyle={s.text} onPress={e=>{
                props.navigation.navigate('ButtonScreen')
            }}></Button>
            <Button title='AdvancedListScreen' buttonStyle={s.text} onPress={e=>{
                props.navigation.navigate('AdvancedListScreen')
            }}></Button>
            <Button title='StorageScreen' buttonStyle={s.text} onPress={e=>{
                props.navigation.navigate('StorageScreen')
            }}></Button>
            <Button title='FileManagerScreen' buttonStyle={s.text} onPress={e=>{
                props.navigation.navigate('FileManagerScreen')
            }}></Button>
            <Button title='FormScreen' buttonStyle={s.text} onPress={e=>{
                props.navigation.navigate('FormScreen')
            }}></Button>
            <Button title='TipScreen' buttonStyle={s.text} onPress={e=>{
                props.navigation.navigate('TipScreen')
            }}></Button>
            <Button title='Image' buttonStyle={s.text} onPress={e=>{
                props.navigation.navigate('ImageScreen')
            }}></Button>
            <Button title='ListItem' buttonStyle={s.text} onPress={e=>{
                props.navigation.navigate('ListItem')
            }}></Button>
        </SafeAreaView>
    )
}

HomeScreen.navigationOptions = ({navigation})=>{
    return Object.assign({},HeaderOption2({}),{
        title: 'Home',
        headerLeft: <Fragment></Fragment>
    })
}

const s = StyleSheet.create({
    layout: {
        flex:1,
        padding: 20,
    },
    text: {
        marginBottom: 10
    }
});

export default HomeScreen