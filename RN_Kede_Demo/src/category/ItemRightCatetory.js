import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';

let ScreenUtil = require('../utils/ScreenUtil');
let SingleItem = require('./ItemImg2Text');

export function Item(data) {
    let item = data.item;
    return (
        <View style={styles.item_layout}>
            <Text style={styles.right_item_title}>{item.ClassName}</Text>
            <FlatList
                data={item.ChildAppClassDTO}
                keyExtractor={(item, index) => index + ''}
                renderItem={(item) => {
                    return SingleItem.Item(item)
                }}
                numColumns={3}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item_layout: {
    },
    right_item_title: {
        marginTop: ScreenUtil.scaleSize(30),
        marginBottom: ScreenUtil.scaleSize(20),
        color: '#333333',
        fontSize: ScreenUtil.scaleSize(26),
        marginLeft:ScreenUtil.scaleSize(15),
    },
});