import React, {useRef} from "react";
import { View,Text,StyleSheet} from "react-native";
import { SafeAreaView } from 'react-navigation';
import {HeaderOption2} from '../ui/header/header';
import {BasicInput, Switch} from '../ui/form';
import Button from '../ui/button';
import FormValid from '../ui/formValidation'
import Icon from 'react-native-vector-icons/Ionicons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Radio, Select} from '../index'

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
    },
    agreement: {
        required: 'please agree',
    },
    select1: {
        required: 'please select'
    }
}

export default function FormScreen(props) {
    const FormValidRef = useRef();
    const InputRef1 = useRef();
    const InputRef2 = useRef();
    const InputRef3 = useRef();
    const InputRef4 = useRef();
    const RadioRef = useRef();
    const SelectRef1 = useRef();
    return (
        <SafeAreaView style={s.layout}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'} extraScrollHeight={40}>
            <FormValid ref={FormValidRef} rules={rules}>
                <BasicInput ref={InputRef1} name='input1' placeholder='basic input'></BasicInput>
                <BasicInput ref={InputRef2} name='input2' placeholder='disabled' editable={false} initValue='disabled'></BasicInput>
                <BasicInput ref={InputRef3} name='input3' required={true} placeholder='Input with left view' leftView={(
                    <View><Text>Name:</Text></View>
                )}></BasicInput>
                <BasicInput ref={InputRef4} name='input4' required={true} placeholder='Input with right view' rightView={(
                    <View><Text>+86</Text></View>
                )}></BasicInput>
                <Select ref={SelectRef1} name='select1' type='default' label='default select' options={[{
                    key:'1',value:'option1',checked: false},{
                        key:'2',value:'option2',checked:true
                    },{
                        key:'3',value:'option3',checked:false
                    }]}></Select>
                <Radio ref={RadioRef} name='agreement' label='I agree I agree I agree I agree I agree '></Radio>
            </FormValid>
            <Button buttonStyle={{marginTop: 20}} onPress={()=>{
                if(FormValidRef.current.valid()) {
                    console.log(FormValidRef.current.value());
                    
                }
            }} title='Submit' type='main'></Button>
            </KeyboardAwareScrollView>
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