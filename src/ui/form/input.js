import React, {useState, useEffect} from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
    StyleSheet, 
    TextInput, 
    Platform } 
from 'react-native';
import {Colors, BorderWidth} from '../global/globalStyle'
import Icon from 'react-native-vector-icons/Ionicons'

export default function BasicInput({
    required = false, //是否必填
    leftView,
    rightView,
    inputProps,
    clear = true, //是否可清除
    secureTextEntry = false,
    initValue = '',
    placeholder = '',
    editable = true,

    onFocusFunc,
    onBlurFunc,
    onClearFunc,
    onChangeFunc,

    wrapStyle,
    borderStyle,
    inputStyle
}) {
    const [value, setValue] = useState(initValue);
    const [showClear, setShowClear] = useState(false);

    // fixed iphone align:right space not show bugs
    // https://github.com/facebook/react-native/issues/10218
    // https://stackoverflow.com/questions/19569688/right-aligned-uitextfield-spacebar-does-not-advance-cursor-in-ios-7
    function _replaceSpace(str) {
        if (!str) return str;
        let string = str.replace(/\u0020/, '\u00a0');
        // if(onlyNum){
        //     string = string.replace(/[^\d]/g, '').replace(/^0*/, '')
        // }
        return string
    }

    function _changeFunc(text){
        setValue(text);
        clear && setShowClear(true);
        onChangeFunc && onChangeFunc(e)
    }

    function _focusFunc(e) {
        clear && setShowClear(true);
        onFocusFunc && onFocusFunc(e)
    }

    function _blurFunc(e) {
        clear && setShowClear(false);
        onBlurFunc && onBlurFunc(e)
    }

    function _clear() {
        setValue('');
        setShowClear(false);
        onClearFunc && onClearFunc(e)
    }

    return (
        <View style={[styles.wrap, wrapStyle]}>
            <View style={[styles.border, borderStyle]}>
                <View style={[styles.inputWrap]}>
                    {
                        required && <Text style={styles.required}>* </Text>
                    }
                    {
                        leftView && 
                        <View style={styles.leftView}>
                            {leftView}
                        </View>
                    }
                    <TextInput 
                        autoCapitalize={'none'}
                        style={[styles.input, inputStyle]}
                        multiline={true}
                        contextMenuHidden={secureTextEntry}
                        value={_replaceSpace(value)}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholderTextColor={Colors.darkLL}
                        placeholder={placeholder}
                        returnKeyType={'done'}
                        blurOnSubmit={true}
                        onChangeText={text => _changeFunc(text)}
                        onFocus={(e) => _focusFunc(e)}
                        onBlur={(e) => _blurFunc(e)} 
                        editable={editable}
                        {...inputProps}/>
                    <View style={styles.right}>
                        {
                            clear && showClear &&
                            <TouchableOpacity style={styles.clearStyle} onPress={() => { _clear() }}>
                                <Icon name='ios-close-circle' size={20} color={Colors.gray}></Icon>
                            </TouchableOpacity>
                        }
                        {
                            rightView &&
                            <View style={styles.rightView}>
                                {rightView}
                            </View>
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#FFFFFF',
    },
    border: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#FFFFFF',
        borderBottomColor: Colors.grayL,
        borderBottomWidth: BorderWidth,
        flexDirection: 'column',
        position: 'relative'
    },
    inputWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlignVertical: 'center',
    },
    rightView: {
        marginLeft: 10,
        marginBottom:-5
    },
    leftView: {
        marginRight: 10,
        marginBottom:-5
    },
    label: {
        // flex:1,
        fontSize: 15,
        color: '#222222',
        lineHeight: 20,
        marginRight: 10,
        textAlignVertical: 'center',
        width: 135
    },
    input: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 0,
        fontSize: 15,
        color: '#222222',
        textAlignVertical: 'center',
        maxHeight: 60
    },
    clearStyle: {
        marginBottom: -5,
        marginLeft: 10
    },
    required: {
        color: '#f24c3d'
    },
    errorWrap: {
        borderBottomColor: '#f24c3d',
        paddingVertical: 0,
        paddingTop: 15,
    },
    defaultStyle: {
        borderBottomColor: '#FFF'
        
    },
});