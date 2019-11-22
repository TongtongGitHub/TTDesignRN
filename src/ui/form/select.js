import React, { useState, useRef, forwardRef, useImperativeHandle, Fragment } from 'react';
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
    Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors, BorderWidth, FixedBottom } from '../global/globalStyle';

let tempList = null;
export default forwardRef(function Select ({
    required = false,
    type = 'default', // default, custom
    label = '',
    options = [], // [{key: string,value: string,checked: bool}]
    onChange,
},ref){
    const [showOptions, setShowOptions] = useState(false);
    const [optionList, setOptionList] = useState(options);
    const [selected, setSelected] = useState(optionList.filter(item=>{return item.checked;}));
    useImperativeHandle(ref, () => ({
        value: () => {
            return selected.map(item=>{return item.key}).join(',');
        }
      }));
    return(
        <Fragment>
            <TouchableOpacity activeOpacity={1} onPress={()=>{
                tempList = optionList.map(item=>{
                    return {
                        key: item.key,
                        value: item.value,
                        checked: item.checked
                    }
                });
                console.log(tempList);
                setShowOptions(true);
            }} style={[styles.layout]}>
                <Text style={{fontSize:16}}>{required && <Text style={styles.required}>* </Text>}{label}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{marginRight: 10}}>{
                        selected.map(item=>{return item.value}).join(',')
                    }</Text>
                    <Icon name='ios-arrow-forward' size={16} color={Colors.darkL}></Icon>
                </View>
            </TouchableOpacity>
            <Modal
                popup
                visible={showOptions}
                // onClose={()=> this._selectConfirm()}
                // onRequestClose={()=>{}}
                transparent={true}
                maskClosable={true}
                animationType="fade">
                <TouchableOpacity activeOpacity={1} onPress={()=>{
                        setOptionList(tempList);
                        setShowOptions(false);
                    }} style={[styles.popWrap]}>
                    </TouchableOpacity>
                    <View style={styles.content}>
                        <View style={styles.titleWrap}>
                            <Text style={[styles.titText]} onPress={()=> {
                                console.log(tempList);
                                setOptionList(tempList);
                                setShowOptions(false);
                            }}>Cancel</Text>
                            <Text style={styles.titText}>{label}</Text>
                            <Text style={[styles.titText]} onPress={()=> {
                                setSelected(optionList.filter(item=>{return item.checked;}))
                                setShowOptions(false);
                            }}>Confirm</Text>
                        </View>
                        <ScrollView style={[styles.options]}>
                            { optionList.map((item, index) => {
                                return (
                                    <TouchableOpacity activeOpacity={1}
                                        style={(styles.option)}
                                        key={index} onPress={() => {

                                            console.log(tempList);
                                            setOptionList(optionList.map((item,i)=>{
                                                if (i === index) {
                                                    let newItem = item;
                                                    newItem.checked = !item.checked;
                                                    return newItem;
                                                } else {
                                                    return item;
                                                }
                                            }))
                                            console.log(tempList);
                                            
                                    }}>
                                        <Text>{item.value}</Text>
                                        {item.checked && <Icon style={{position:'absolute',right: 15}} name='md-checkmark' size={16} color={Colors.red}></Icon>}
                                    </TouchableOpacity>
                                )

                            })}
                        </ScrollView>
                    </View>
            </Modal>
        </Fragment>
    )
})

const styles = StyleSheet.create({
    layout: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomColor: Colors.grayL,
        borderBottomWidth: BorderWidth,
    },
    titleWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomColor: '#a1aab2',
        borderBottomWidth: BorderWidth,
    },
    titText: {},
    options: {
    },
    option: {
        padding: 15,
        borderBottomColor: '#a1aab2',
        borderBottomWidth: BorderWidth,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    popWrap: {
        backgroundColor:'rgba(0,0,0,0.5)',
        flex:1,
    },
    content: {
        position:'absolute',
        bottom: 0,
        left:0,
        right:0,
        backgroundColor:'#fff',
        paddingBottom: FixedBottom
    },
    required: {
        color: '#f24c3d'
    },
});
