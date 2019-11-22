import React, {
    useState, Fragment, forwardRef,useImperativeHandle, useEffect
} from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    View,
    DeviceEventEmitter
} from 'react-native'

export default function TopView({
}) {
    const [view, setView] = useState(null);
    function setTopView(topView, callback){
        setView(topView);
        callback && callback();
    }
    function removeTopView(){
        setView(null);
    }
    useEffect(() => {
        DeviceEventEmitter.addListener("RNTopViewAdd", setTopView);
        DeviceEventEmitter.addListener("RNTopViewRemove", removeTopView);
        return () => {
            DeviceEventEmitter.removeListener("RNTopViewAdd", setTopView);
            DeviceEventEmitter.removeListener("RNTopViewRemove", removeTopView);
        };
    }, [])
    return (
        <Fragment>
            {view}
        </Fragment>
    )
}

const styles = StyleSheet.create({
})