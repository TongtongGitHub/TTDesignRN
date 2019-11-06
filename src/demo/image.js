import React, {useRef} from "react";
import { View,TouchableOpacity,StyleSheet} from "react-native";
import { SafeAreaView } from 'react-navigation';
import {HeaderOption2} from '../ui/header/header';
import Button from '../ui/button';
import Icon from 'react-native-vector-icons/Ionicons'
import ImagePlaceHolder from '../ui/imagePlaceHolder';
import ImageGallery from '../ui/imageGallery'
import FastImage from 'react-native-fast-image'

export default function ImageScreen(props) {
    let imageList = [
        {url:'https://picsum.photos/id/1/200/200'},
        {url:'https://picsum.photos/id/2/200/200'},
        {url:'https://picsum.photos/id/3/200/200'},
    ];
    const imageGalleryRef = useRef()
    return (
        <SafeAreaView style={s.layout}>
            <TouchableOpacity onPress={()=>{
                imageGalleryRef.current.show(0);
            }} style={s.wrap}>
                <ImagePlaceHolder style={s.image} uri={imageList[0].url}></ImagePlaceHolder>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                imageGalleryRef.current.show(1);
            }}  style={s.wrap}>
                <ImagePlaceHolder cache={false} style={s.image} uri={imageList[1].url}></ImagePlaceHolder>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                imageGalleryRef.current.show(2);
            }}  style={s.wrap}>
                <ImagePlaceHolder style={s.image} uri={imageList[2].url}></ImagePlaceHolder>
            </TouchableOpacity>

            <ImageGallery ref={imageGalleryRef} imageList={imageList}></ImageGallery>
            
        </SafeAreaView>
    )
}

ImageScreen.navigationOptions = ({navigation})=>{
    return Object.assign({},HeaderOption2({
        navigation,
    }),{
        title: 'Image',
    })
}

const s = StyleSheet.create({
    layout: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap:'wrap',
    },
    wrap: {
        margin: 10,
        width: 100,
        height:100,
    },
    image: {
    }
});