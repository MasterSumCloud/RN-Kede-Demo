import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import * as Constant from '../utils/Constant';
let ScreenUtil = require('../utils/ScreenUtil');


export function TopSeacrchView(type){

    switch (type) {
        case Constant.Tittle_Bar_Search_only://黑背景搜索 Tabbar
            return (<View style={styles.search_view_layout}>
                <View style={styles.white_click_view}>
                    <View style={styles.search_img_and_text}>
                        <Image style={styles.left_search_icon} source={require('../../resource/icon/icon_search.png')}/>
                        <Text style={styles.text_of_search_titleTbar}>请输入您想要搜索的内容</Text>
                    </View>
                </View>
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
        alignItems:'center',
        justifyContent:'center'
    },
    white_click_view:{
        backgroundColor:'white',
        borderRadius:ScreenUtil.scaleSize(25),
        alignItems:'center',
        justifyContent:'center',
        height:ScreenUtil.scaleSize(52),
        flex:1,
        marginLeft:ScreenUtil.scaleSize(15),
        marginRight:ScreenUtil.scaleSize(15),
    },
    left_search_icon:{
        width:ScreenUtil.scaleSize(23),
        height:ScreenUtil.scaleSize(25),
        alignSelf:'flex-end'
    },
    search_img_and_text:{
        flexDirection:'row'
    },
    text_of_search_titleTbar:{
        color:'#999999',marginLeft:ScreenUtil.scaleSize(5),
    }

});