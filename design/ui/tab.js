import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';
import { BorderWidth, Colors } from './global/globalStyle';

const { width } = Dimensions.get('window');
export default function Tabs ({
    index = 0,
    widthAdjust = 0,
    tabs = [],
    children,
    tabHeaderWrapStyle,
    tabHeaderStyle,
    tabTextStyle,
    tabContentWrapStyle
}) {
    const [curIndex, setCurIndex] = useState(index)
    let translateXContent = new Animated.Value(( widthAdjust - width ) * index);
    let translateXTab = new Animated.Value(( width - widthAdjust ) * index / 3);
    function _tabChange(item, index) {
        Animated.timing(
            translateXContent,
            {
                toValue: ( widthAdjust - width ) * index,
                duration: 300,
                easing: Easing.quad
            }
        ).start(()=>{});
        Animated.timing(
            translateXTab,
            {
                toValue: ( width - widthAdjust  ) * index / 3,
                duration: 300,
                easing: Easing.quad
            }
        ).start(()=>{});
    }
    function _renderTabsHeader() {
        return (
        <View style={[styles.tabHeaderWrap, tabHeaderWrapStyle]}>
            {
                tabs.map((item, index)=> {
                    return <TouchableOpacity activeOpacity={1} style={[styles.tabHeaderItem,curIndex === index && styles.tabHeaderChoose,tabHeaderStyle]}
                                    onPress={()=> _tabChange(item, index)}
                                    key={'$tabsHeader'+ index}>
                        <Text style={[styles.tabHeaderText, curIndex === index && styles.tabHeaderTextChoose,tabTextStyle]}>{item}</Text>
                    </TouchableOpacity>
                })
            }
            <Animated.View style={[styles.tabBorder,
                { transform: [{ translateX: translateXTab }],width: ('33.3333%')}]}></Animated.View>
        </View>
        );
    }

    function _renderTabContent() {
        return (
            <Animated.View style={[styles.tabContentWrap, { transform: [{ translateX: translateXContent }], width: (tabs.length + '00%') },tabContentWrapStyle]}>
                {
                    children.map((tab, index)=> {
                        return <View key={'$tabsContent'+ index} style={styles.listWrap}>{tab}</View>
                    })
                }
            </Animated.View>
        );;
    }
    
    if (!Array.isArray(children) || children.length === 0 || !Array.isArray(tabs) || tabs.length === 0) {
        return null;
    }
    return (
        <View style={{ flex: 1, overflow: 'hidden' }}>
            {_renderTabsHeader()}
            {_renderTabContent()}
        </View>
    )
}

const styles = StyleSheet.create({
    tabHeaderWrap: {
        flexDirection: 'row',
        borderBottomColor: Colors.darkLL,
        borderBottomWidth: BorderWidth,
        height: 40
    },
    tabHeaderItem: {
        position: 'relative',
        height: 40,
        flex: 1,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabChooseBorder: {
        height: 2,
        width: '100%',
        backgroundColor: '#F24C3D',
        position: 'absolute',
        bottom: 0
    },
    tabDisabled: {
        color: '#b3b3b3'
    },
    tabHeaderText: {
        color: Colors.dark,
        lineHeight: 20,
        height: 20,
        fontSize: 14,
    },
    tabHeaderChoose: {
    },
    tabBorder: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#0D4680',
        height: 2,
    },
    tabContentWrap: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        flex: 1
    },
    listWrap: {
        flex: 1
    }
});