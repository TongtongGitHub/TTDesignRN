import React, {
    useState, Fragment, forwardRef, useImperativeHandle
} from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Modal
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from './global/globalStyle'
import ImageViewer from 'react-native-image-zoom-viewer';

export default forwardRef(function ImageGallery({
    show = false,
    imageList = [],
},ref) {
    const [showImage, setShowImage] = useState(show);
    const [index, setIndex] = useState(0)
    useImperativeHandle(
        ref,
        () => ({
            show: (index)=>{
                setIndex(index);
               setShowImage(true); 
            }
        }),
    )
    return (
        <Modal visible={showImage} transparent={true}>
            <ImageViewer index={index} imageUrls={imageList} onClick={()=>{
                setShowImage(false);
            }}/>
        </Modal>
    )
})

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
