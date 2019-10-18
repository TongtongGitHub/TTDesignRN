import React, {
    useState
} from 'react'
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function GoTop({
    showGoTop = false,
    goTopFunc,
    style
}) {
    if (!showGoTop) {
        return null;
    }
    return (
        <TouchableOpacity activeOpacity={0.5} 
        onPress={()=>{
            goTopFunc && goTopFunc();
        }} style={[styles.layout,style]}>
            <Icon name='ios-arrow-up' size={20} color="#222"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    layout: {
        height:42,
        width:42,
        borderRadius: 21,
        borderColor:"#ced3d9",
        borderWidth:1,
        backgroundColor:'rgba(255, 255, 255, 0.95)',
        position:'absolute',
        bottom:30,
        right:20,
        justifyContent:'center',
        alignItems:'center'
    },
});
