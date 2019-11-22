import React, {useRef} from "react";
import { View,Text,StyleSheet} from "react-native";
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    Radio, 
    Select, 
    DatePicker,
    Input,
    Button,
    FormValidation,
    HeaderOption2
} from '../../design/index'

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
    },
    date1: {
        required: 'please select date'
    },
    date2: {
        required: 'please select time'
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
    const Date1 = useRef();
    const Date2 = useRef();
    return (
        <SafeAreaView style={s.layout}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'} extraScrollHeight={40}>
            <FormValidation ref={FormValidRef} rules={rules}>
                <Input ref={InputRef1} name='input1' placeholder='basic input'></Input>
                <Input ref={InputRef2} name='input2' placeholder='disabled' editable={false} initValue='disabled'></Input>
                <Input ref={InputRef3} name='input3' required={true} placeholder='Input with left view' leftView={(
                    <View><Text>Name:</Text></View>
                )}></Input>
                <Input ref={InputRef4} name='input4' required={true} placeholder='Input with right view' rightView={(
                    <View><Text>+86</Text></View>
                )}></Input>
                <Select required={true} ref={SelectRef1} name='select1' type='default' label='default select' options={[{
                    key:'1',value:'option1',checked: false},{
                        key:'2',value:'option2',checked:true
                    },{
                        key:'3',value:'option3',checked:false
                    }]}></Select>
                <DatePicker ref={Date1} name='date1' required={true}></DatePicker>
                <DatePicker ref={Date2} name='date2' required={true} mode='time' label={'Time'}></DatePicker>
                <Radio ref={RadioRef} name='agreement' label='I agree I agree I agree I agree I agree '></Radio>
            </FormValidation>
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