import React, {Fragment, useState,forwardRef, useImperativeHandle} from 'react';
import {View, Button, Platform,StyleSheet,TouchableOpacity, Text,Modal} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors, BorderWidth, FixedBottom } from '../global/globalStyle';

let tempDate = null;
export default forwardRef(function DatePicker({
    required = false,
    defaultDate = new Date(),
    is24Hour = true,
    mode = 'date',
    label = 'Date',
},ref) {
    const [showPicker, setShowPicker] = useState(false);
    const [date, setDate] = useState(defaultDate);
    useImperativeHandle(ref, () => ({
        value: () => {
            return getDateTime();
        }
      }));
    function getDateTime(d) {
        if (mode === 'date') {
            return date.toLocaleDateString()
        } else {
            return date.toLocaleTimeString()
        }
    }
    return (
        <Fragment>
            <TouchableOpacity activeOpacity={1} onPress={()=>{
                tempDate = date;
                setShowPicker(true);
            }} style={[styles.layout]}>
                <Text style={{fontSize:16}}>{required && <Text style={styles.required}>* </Text>}{label}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{marginRight: 10}}>{getDateTime()}</Text>
                    <Icon name='ios-arrow-forward' size={16} color={Colors.darkL}></Icon>
                </View>
            </TouchableOpacity>
            <Modal
                popup
                visible={showPicker}
                // onClose={()=> this._selectConfirm()}
                // onRequestClose={()=>{}}
                transparent={true}
                maskClosable={true}
                animationType="fade">
                <TouchableOpacity activeOpacity={1} onPress={()=>{
                                setShowPicker(false);
                    }} style={[styles.popWrap]}>
                </TouchableOpacity>

                <View style={styles.content}>
                        <View style={styles.titleWrap}>
                            <Text style={[styles.titText]} onPress={()=> {
                                setShowPicker(false);
                            }}>Cancel</Text>
                            <Text style={styles.titText}>{label}</Text>
                            <Text style={[styles.titText]} onPress={()=> {
                                setDate(tempDate)
                                setShowPicker(false);
                            }}>Confirm</Text>
                        </View>
                        <DateTimePicker value={date}
                            mode={mode}
                            is24Hour={is24Hour}
                            display="default"
                            onChange={(e,d)=>{
                                tempDate = d;
                            }} />
                    </View>
            </Modal>
        </Fragment>
      );
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