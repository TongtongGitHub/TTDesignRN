import React, {
    useState, Fragment
} from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FastImage from 'react-native-fast-image'
import { Colors } from './global/globalStyle'
import {makeid} from '../lib/tool'

export default function ImagePlaceHolder({
    uri,
    style,
    priority,
    resizeMode,
    cache = true
}) {
    const [showPlaceHolder, setShowPlaceHolder] = useState(true)
    let placeHolder = null;
    if (!uri || showPlaceHolder) {
        placeHolder = (
            <View style={styles.layout}>
                <Icon size={50} name='ios-image' color={Colors.darkLL}></Icon>
            </View>
        )
    }
    
    return (
        <Fragment>
            <FastImage
                style={showPlaceHolder ? {width:0,height:0} : [{ width: '100%', height: '100%' },style]}
                source={{
                    uri: cache ? uri : uri + '?v=' + makeid(5),
                    headers: { Authorization: 'someAuthToken' },
                    priority: priority || FastImage.priority.normal,
                    cache: cache || FastImage.cacheControl.immutable
                }}
                resizeMode={ resizeMode || FastImage.resizeMode.contain}
                onLoadEnd={()=>{
                    setShowPlaceHolder(false);
                }}
            />
            {placeHolder}
        </Fragment>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
