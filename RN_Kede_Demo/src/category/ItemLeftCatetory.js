import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
let ScreenUtil = require('../utils/ScreenUtil');

export function Item(self,data,selectedPosition) {
    let item = data.item;
    let selected = data.index===selectedPosition;
    return (
        <View style={[styles.item_laytou,{backgroundColor:selected?'#FFFFFF':'#F7F8F5'}]}>
            <Text style={{color:selected?'#8EC31F':'#333333',fontSize:ScreenUtil.setSpText(26)}}>{item.ClassName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item_laytou:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height:ScreenUtil.scaleSize(100)
    },

});