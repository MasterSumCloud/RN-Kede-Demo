import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

let ScreenUtil = require('../utils/ScreenUtil');

export function Item(data) {
    let item = data.item;
    return (<View style={styles.item_container}>
        <Image style={styles.goods_img} source={{uri: item.ImageUrl}}/>
        <Text style={styles.goods_name}>{item.ClassName}</Text>
    </View>);
}

const styles = StyleSheet.create({
    item_container: {
        width: (ScreenUtil.screenW-ScreenUtil.scaleSize(180))/3,
        alignItems:'center',
        justifyContent:'center',
        marginTop:ScreenUtil.scaleSize(30)
    },
    goods_img: {
        height: ScreenUtil.scaleSize(140),
        width: ScreenUtil.scaleSize(140),
        marginBottom:ScreenUtil.scaleSize(20)
    },
    goods_name: {
        fontSize: ScreenUtil.scaleSize(24),
        color: '#666666',
    }
});