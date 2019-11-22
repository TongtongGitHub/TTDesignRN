import React, {Fragment} from "react";
import { View,Text,StyleSheet} from "react-native";
import { SafeAreaView } from 'react-navigation';
import {
    Radio, 
    Select, 
    DatePicker,
    Input,
    Button,
    FormValidation,
    AdvancedList,
    HeaderOption2
} from '../../design/index'
// import FileManager from '../lib/fileManager'

export default function FileManagerScreen(props) {
    return (
        <SafeAreaView style={s.layout}>
            <Text>Not available now, rn-fetch-blob has bugs in react native 0.61. Downgrade to 0.60!</Text> 
            <Button title='Wite' onPress={()=>{
                // FileManager.write('DocumentDir', 'log', 'log.log', 'test', 'utf8');
            }}></Button>
            <Button title='Read' onPress={()=>{
                // FileManager.read('DocumentDir', 'log', 'log.log', 'utf8');
            }}></Button>
        </SafeAreaView>
    )
}

FileManagerScreen.navigationOptions = ({navigation})=>{
    return Object.assign({},HeaderOption2({
        navigation,
    }),{
        title: 'FileManagerScreen',
    })
}

const s = StyleSheet.create({
    layout: {
        flex:1,
        padding: 20,
        justifyContent: 'space-around',
    }
});