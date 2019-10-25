import React, {Fragment} from "react";
import { View,Text, Touch,StyleSheet } from "react-native";
import {NavigationEvents,SafeAreaView} from 'react-navigation';
import {HeaderOption2} from '../ui/header/header'

function HomeScreen(props) {
    return (
        <SafeAreaView style={s.layout}>
            <NavigationEvents
                onWillFocus={payload=>{
                    console.log('will foucs', payload);
                    
                }}
            ></NavigationEvents>

            <Text style={s.text} onPress={e=>{
                props.navigation.navigate('ButtonScreen')
            }}>Button</Text>
            <Text style={s.text} onPress={e=>{
                props.navigation.navigate('AdvancedListScreen')
            }}>AdvancedListScreen</Text>
            <Text style={s.text} onPress={e=>{
                props.navigation.navigate('StorageScreen')
            }}>StorageScreen</Text>
            <Text style={s.text} onPress={e=>{
                props.navigation.navigate('FileManagerScreen')
            }}>FileManagerScreen</Text>
            <Text style={s.text} onPress={e=>{
                props.navigation.navigate('FormScreen')
            }}>FormScreen</Text>
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
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text: {
        fontSize: 26
    }
});

export default HomeScreen