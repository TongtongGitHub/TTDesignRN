import React, {useRef} from "react";
import { View,Text,StyleSheet} from "react-native";
import { SafeAreaView } from 'react-navigation';
import {HeaderOption2} from '../ui/header/header';
import {BasicInput, Switch} from '../ui/form';
import Button from '../ui/button';
import FormValid from '../ui/formValidation'
import Icon from 'react-native-vector-icons/Ionicons'

const rules = {
    input1: {
        required: 'please enter input1',
        numberOnly: 'only number'
    },
    input2: {
        required: 'please enter input2'
    },
    input3: {
        required: 'please enter input3',
        regExp: {
            rule: /^\d+$/,
            message: 'Please enter Arabic numbers.'
        }
    },
    input4: {
        custom: {
            rule: (value)=> {
                return value.length >= 3;
            },
            message: 'Please enter at least three characters.'
        },
    }
}

export default function FormScreen(props) {
    const FromValidRef = useRef();
    const InputRef1 = useRef();
    const InputRef2 = useRef();
    const InputRef3 = useRef();
    const InputRef4 = useRef();
    return (
        <SafeAreaView style={s.layout}>
            <FormValid ref={FromValidRef} rules={rules}>
                <BasicInput ref={InputRef1} name='input1' placeholder='basic input'></BasicInput>
                <BasicInput ref={InputRef2} name='input2' placeholder='disabled' editable={false} initValue='disabled'></BasicInput>
                <BasicInput ref={InputRef3} name='input3' required={true} placeholder='Input with left view' leftView={(
                    <View><Text>Name:</Text></View>
                )}></BasicInput>
                <BasicInput ref={InputRef4} name='input4' required={true} placeholder='Input with right view' rightView={(
                    <View><Text>+86</Text></View>
                )}></BasicInput>
            </FormValid>
            <Button onPress={()=>{
                if(FromValidRef.current.valid()) {
                    
                }
            }} title='Submit' type='main'></Button>
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