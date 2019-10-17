import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    StatusBar,
    ActivityIndicator,
    Image,
    RefreshControl,
    Dimensions
} from 'react-native';

import GoTop from './goTop'

function AdvancedFlatList({     
    //基础参数   
    loadDataFunc, //加载数据函数
    renderItemFunc,  //渲染item方法
    //额外配置
    listType = 0, //0: list 1: gallery
    showGoTop = false, //是否显示返回顶部
    pullRefresh = true, //是否下拉刷新
    initialNumToRender = 8, //首屏渲染数量
    noResultView, // 无结果页面
    singlePage, //是否分页

    renderSeparatorFunc, //渲染分隔符
    renderHeader,
    onMomentumScrollEndFunc,
    onScrollEndDragFunc,
    onScrollBeginDragFunc,
    
    layoutStyle,
    listStyle,
}){
    const [loading, setLoading] = useState(true);
    const [reachEnd, setReachEnd] = useState(false);
    const [listData, setListData] = useState([]);
    const [refreshing, setRefreshing] = useState(false)

    let onEndReachedCalledDuringMomentum = false;
    let goTopRef = useRef();
    let flatListRef = useRef();
    let pageNo = 0;

    useEffect(() => {
        loadData({init: true});
    }, [])

    useEffect(() => {
        loadData({});
    }, [reachEnd])

    function renderNoResult() {
        return (
            <View style={styles.noResult}>
                {
                    noResultView 
                    ? noResultView()
                    : <Text style={styles.noResultText}>No records found</Text>
                }
            </View>
        );
    }

    function renderFooter() {
        if (listData.length > 0) {
            return (
                <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                    {reachEnd && <Text style={{ fontSize: 13, color: '#b2b2b2' }}>Already in the end~</Text>}
                    {!reachEnd && <ActivityIndicator></ActivityIndicator>}
                </View>
            )
        } else {
            return null;
        }
    }

    function onScrollFunc(e) {
        if (showGoTop) {
            if (e.nativeEvent.contentOffset.y > Dimensions.get('window').height) {
                goTopRef.current.toggle(true);
            } else {
                goTopRef.current.toggle(false);
            }
        }
    }

    function loadData({init=false}) {
        if (init) {
            pageNo = 1;
            if (loadDataFunc){
                loadDataFunc({pageNo: pageNo}).then(data => {
                    setLoading(false);
                    setListData(data);
                    setReachEnd(singlePage);
                    setRefreshing(false);
                })
            } else {
                setLoading(false);
            }
        } else {
            if (!onEndReachedCalledDuringMomentum) {
                if (!singlePage) {
                    pageNo++;
                    loadDataFunc({pageNo: pageNo}).then(data => {
                        setListData([...listData, ...data]);
                        setReachEnd(data.length === 0);
                    })
                } else {
                    setReachEnd(true);
                }
                this.onEndReachedCalledDuringMomentum = true;
            }
        }
    }

    if (loading) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator/>
            </View>
        );
    } 
    let config = {
    }
    if (listType === 0) { // list view

    } else { // gallery view
        config.columnWrapperStyle = {
            flexShrink: 1,
            paddingLeft: 10,
            paddingRight: 10
        };
        config.numColumns = '2';
    }
    return (
        <View style={[styles.layout,layoutStyle]}>
            <FlatList
                //防止下滑到底部多次触发loadmore
                onMomentumScrollBegin={() => { onEndReachedCalledDuringMomentum = false }}
                onMomentumScrollEnd={onMomentumScrollEndFunc}
                style={[styles.list,listStyle]}
                contentContainerStyle={listType === 0 ? listStyle : [styles.listG, listStyle]}
                data={listData}
                renderItem={renderItemFunc}
                ListEmptyComponent={renderNoResult}
                onEndReached={()=>setReachEnd(true)}
                onEndReachedThreshold={0.2}
                keyExtractor={(item, index) => {
                    return item.id ? item.id.toString() : index.toString();
                }} //需要提供id参数
                ItemSeparatorComponent={renderSeparatorFunc}
                ListHeaderComponent={renderHeader}
                ListFooterComponent={renderFooter}
                initialNumToRender={initialNumToRender}  //首屏渲染item数量
                // windowSize={100}
                removeClippedSubviews={false} //是否回收屏幕外item
                ref={flatListRef}
                // key={this.props.listType}
                // extraData={this.props}
                onScroll={onScrollFunc}
                scrollEventThrottle={16}
                onScrollEndDrag={onScrollEndDragFunc}
                onScrollBeginDrag={onScrollBeginDragFunc}
                refreshControl={
                    pullRefresh ?
                    <RefreshControl refreshing={refreshing}
                        onRefresh={()=>{
                            setRefreshing(true);
                            onEndReachedCalledDuringMomentum = false;
                            loadData({init:true});
                        }}
                        tintColor="#888"
                        title="Loading..."
                        titleColor="#888"></RefreshControl> :
                        null
                }
                {...config}
            />
            {showGoTop &&
                <GoTop ref={flatListRef}></GoTop>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1
    },
    list: {
        flex: 1,
        flexDirection: 'column'
    },
    listG: {
        justifyContent: 'space-around'
    },
    noResult: {
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingTop: 50,
        paddingBottom: 50
    },
    noResultText: {
        paddingTop: 10,
        fontSize: 13,
        color: '#222'
    },
});

export default AdvancedFlatList;