import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';
import * as Constant from '../utils/Constant';

let ScreenUtil = require('../utils/ScreenUtil');


export function TopSeacrchView(type, navigation) {
    switch (type) {
        case Constant.Tittle_Bar_Search_only://黑背景搜索 Tabbar
            return (<View style={styles.search_view_layout}>
                <View style={styles.white_click_view}>
                    <TouchableWithoutFeedback onPress={() => navigation.push('Search')}>
                        <View style={styles.search_img_and_text}>
                            <Image style={styles.left_search_icon}
                                   source={require('../../resource/icon/icon_search.png')}/>
                            <Text style={styles.text_of_search_titleTbar}>请输入您想要搜索的内容</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>);
        case Constant.Title_Bar_bouth:
            return (<View style={styles.search_view_layout_trans}>
                <TouchableWithoutFeedback onPress={() => alert('3D试戴开发中')}>
                    <Image style={styles.icon_image} source={require('../../resource/home/ic_try.png')}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.push('Search')}>
                    <View style={styles.white_click_view}>
                        <View style={styles.search_img_and_text}>
                            <Image style={styles.left_search_icon}
                                   source={require('../../resource/icon/icon_search.png')}/>
                            <Text style={styles.text_of_search_titleTbar}>请输入您想要搜索的内容</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => alert('扫一扫开发中')}>
                    <Image style={styles.icon_image} source={require('../../resource/home/ic_scan.png')}/>
                </TouchableWithoutFeedback>
            </View>);
        default:
            return (<View style={styles.search_view_layout}>
                <text>标题</text>
            </View>);
    }

}


const styles = StyleSheet.create({
    search_view_layout: {
        flexDirection: 'row',
        height: ScreenUtil.scaleSize(100),
        width: ScreenUtil.screenW,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    search_view_layout_trans: {
        flexDirection: 'row',
        height: ScreenUtil.scaleSize(100),
        width: ScreenUtil.screenW,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingLeft: ScreenUtil.scaleSize(15),
        paddingRight: ScreenUtil.scaleSize(15),
    },
    white_click_view: {
        backgroundColor: 'white',
        borderRadius: ScreenUtil.scaleSize(15),
        alignItems: 'center',
        justifyContent: 'center',
        height: ScreenUtil.scaleSize(52),
        flex: 1,
        marginLeft: ScreenUtil.scaleSize(15),
        marginRight: ScreenUtil.scaleSize(15),
    },
    left_search_icon: {
        width: ScreenUtil.scaleSize(23),
        height: ScreenUtil.scaleSize(25),
        alignSelf: 'flex-end'
    },
    search_img_and_text: {
        flexDirection: 'row'
    },
    text_of_search_titleTbar: {
        color: '#999999', marginLeft: ScreenUtil.scaleSize(5),
    },
    icon_image: {
        width: ScreenUtil.scaleSize(50),
        height: ScreenUtil.scaleSize(50)
    }

});