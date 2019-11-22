import React,{ PureComponent, Fragment} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {Colors, BorderWidth} from './global/globalStyle'
import Icon from 'react-native-vector-icons/Ionicons'

export default function ListItem({
    label,
    value,
    onPress,
    leftView,
    rightView
}){
    let content = (
        <Fragment>
            <View style={styles.left}>
                {leftView}
                <Text>{label}</Text>
            </View>
            <View style={[styles.right,onPress && {paddingRight: 15}]}>
                <Text>{value}</Text>
                {rightView}
                { onPress && <Icon style={{position:'absolute',top:0,bottom:0,right:0}} size={18} color={Colors.darkL} name='ios-arrow-forward' ></Icon> }
            </View>
        </Fragment>
    );
    if (onPress) {
        return (
            <TouchableOpacity  style={styles.wrap}>
                {content}
            </TouchableOpacity>
        )
    } else {
        return (
            <View style={styles.wrap}>
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'white',
        borderBottomColor: Colors.darkLL,
        borderBottomWidth: BorderWidth
    },
    left: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});
