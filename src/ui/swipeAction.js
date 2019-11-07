import React, {useState,useRef } from 'react';
import {
    Animated,
    PanResponder,
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    ViewPropTypes
} from 'react-native';
import Button from './button'
export default function SwipeAction({
    children,
    leftBtns,
    rightBtns,
}) {
    const [open, setOpen] = useState(false);
    let right = new Animated.Value(0);
    const rightRef = useRef(right)
    let prevRight = null;
    let rightWidth = rightBtns ? rightBtns.length * 100 : 0;
    let leftWidth = leftBtns ? leftBtns.length * 100 : 0;

    function _handleMoveShouldSetPanResponderCapture(event,gestureState){
        return Math.abs(gestureState.dy) < 10 && Math.abs(gestureState.dx) > 10
    }

    function _handlePanResponderMove(event,gestureState){
        if (Math.abs(gestureState.dx) > 10) {
            if (gestureState.dx > leftWidth) {
                return;
            } else if(gestureState.dx < 0 && Math.abs(gestureState.dx + prevRight) >rightWidth ){
                return
            }
            Animated.timing(right, {
                toValue: prevRight + gestureState.dx,
                duration: 0
            }).start();
        }
    }

    function _handlePanResponderEnd(event,gestureState){
        if (rightBtns && gestureState.dx < -30) {
            prevRight = -rightWidth;
            Animated.timing(right, {
                toValue: -rightWidth,
                duration: 200,
            }).start();
        } else {
            prevRight = 0;
            close()
        }
    }

    let _panResponder = PanResponder.create({
        onMoveShouldSetPanResponderCapture: _handleMoveShouldSetPanResponderCapture,
        onPanResponderMove: _handlePanResponderMove,
        onPanResponderRelease: _handlePanResponderEnd,
        onPanResponderTerminate: _handlePanResponderEnd,
        onShouldBlockNativeResponder:(evt,gestureState) => false,
    });

    function close() {
        Animated.timing(right, {
            toValue: 0,
            duration: 200
        }).start()
    }
    return (
        <View style={[s.swipeContainer]}>
            {leftBtns && <View></View>}
            <Animated.View
                style={{transform:[{translateX:right}]}}
                {..._panResponder.panHandlers}
            >
                {children}
            </Animated.View>
            {rightBtns && 
                <View style={[s.swipeActions,{width: rightBtns.length * 100}]}>
                    <Button onPress={()=>{close()}} title={rightBtns[0].text} buttonStyle={{height: '100%'}}></Button>
                </View>
            }
        </View>
    )
}

const s = StyleSheet.create({
    swipeContainer: {
        // width: '100%',
    },
    swipeActions: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right:0,
        zIndex: -1
        // width:'100%',
        // overflow: 'hidden',
        // ...StyleSheet.absoluteFillObject,
        // flexDirection: 'row',
        // justifyContent:'flex-end',
    },
    swipeCover:{
    }
});