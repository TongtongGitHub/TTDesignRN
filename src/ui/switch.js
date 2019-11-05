import React, {useState, useEffect,forwardRef,useImperativeHandle} from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    TextInput, 
    Platform,
    Switch as DefaultSwitch } 
from 'react-native';
import {Colors, BorderWidth} from './global/globalStyle'
import Icon from 'react-native-vector-icons/Ionicons'

export default forwardRef(function Switch({
    initValue,
    label = '',

    onChangeFunc,

    wrapStyle,
    labelStyle,
},ref) {
    const [value, setValue] = useState(initValue);

    useImperativeHandle(ref, () => ({
        value: () => {
            return value;
        }
      }));

    function _change(val) {
        setValue(val);
        
        onChangeFunc && onChangeFunc(val);
    }

    return (
        <View style={[styles.wrap, wrapStyle]}>
            <View style={[styles.borderWrap]}>
                <Text style={[styles.label, labelStyle]}>{label}</Text>
                {
                    Platform.OS === 'ios' ?
                        <DefaultSwitch
                            value={value}
                            style={styles.switchIOS}
                            ios_backgroundColor={'#888888'}
                            trackColor={{ true: '#F24C3D' }}
                            onValueChange={(val)=> _change(val)} />
                        :
                        <DefaultSwitch
                            value={value}
                            style={styles.switchAndroid}
                            trackColor={{ false: '#888888', true: '#F24C3D' }}
                            onValueChange={(val)=> _change(val)} />
                }
            </View>
        </View>
    )
})


const styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#FFFFFF',
    },
    borderWrap: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#DAE0E6',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative'
    },
    label: {
        fontSize: 15,
        color: '#222222',
        lineHeight: 20,
        height: 20,
        marginRight: 10,
        textAlignVertical: 'center'
    },
    switchIOS: {
        position: 'absolute',
        top: 10,
        right: 15
    },
    switchAndroid: {
        position: 'absolute',
        top: 12,
        right: 15
    }
});