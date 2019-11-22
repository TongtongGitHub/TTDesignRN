import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
	Alert,
	TouchableOpacity,
    Switch,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../global/globalStyle';

export default forwardRef(function Radio ({
    checked = false,
    label = '',
    onChange,
},ref){
    const [isChecked, setIsChecked] = useState(checked);
    useImperativeHandle(ref, () => ({
        value: () => {
            return isChecked;
        }
      }));
    return(
        <TouchableOpacity activeOpacity={1} onPress={()=>{
            setIsChecked(!isChecked);
            onChange && onChange(!isChecked);
        }} style={[styles.layout]}>
            {
                isChecked ?
                <Icon style={{marginBottom: -3}} 
                name='ios-radio-button-on' size={20} color={Colors.blueL}></Icon> : 
                <Icon style={{marginBottom: -3}} 
                name='ios-radio-button-off' size={20} color={Colors.dark}></Icon>
            
            }
            <Text style={{marginLeft:5,fontSize:16,color:'#222'}}>{label}</Text>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    layout: {
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    normal: {
        backgroundColor:'#fff',
        width:20,
        height:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#a8b0b8',
        justifyContent:'center',
        alignItems:'center'
    },
    selected: {
        backgroundColor:'#f24c3d', 
        width:20,
        height:20,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    }
});
