import React from 'react';
import {Colors, borderWidth, BorderWidth} from './global/globalStyle'

import {
	Platform,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TouchableNativeFeedback,
	ActivityIndicator,
	ViewPropTypes

} from 'react-native';

function Button({
    type, //default main 
    onPress, //func
    buttonStyle,
    loading, //bool
    title, 
    titleStyle,
    disabled, //bool
    buttonLeft,
    buttonRight
}){
    return (
        <TouchableOpacity 
            activeOpacity={disabled ? 1 : 0.5}
            style={[
                styles.button,
                buttonStyle,
                type === 'main' && styles.mainStyle,
                disabled && styles.disabled,
                ]}
                onPress={onPress}
        >
            {loading && (
                <ActivityIndicator
                    animating={true}
                    style={[styles.loading]}
                    color={Colors.white}
                    size={20}
                />
            )}
            {buttonLeft}
            {title && (
                <Text style={[
                        styles.title,
                        titleStyle,
                        type === 'main' && styles.mainTitleStyle,
                    ]}
                >{title}</Text>)
            }
            {buttonRight}
        </TouchableOpacity>		
    )
    
}


const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
		paddingHorizontal: 12,
		paddingVertical: 8,
		backgroundColor: Colors.whiteD,
		borderWidth: BorderWidth,
		borderColor: Colors.grayLL,
    },
    mainStyle:{
        backgroundColor: Colors.red,
        borderWidth: 0
    },
    disabled: {
      	backgroundColor: Colors.grayL,
	},
	loading:{
		marginRight:5
	},
    title: {
		backgroundColor: 'transparent',
		textAlign: 'center',
		color: Colors.dark,
		fontSize:16
    },
    mainTitleStyle: {
        color: '#fff'
    }
})


export default Button;