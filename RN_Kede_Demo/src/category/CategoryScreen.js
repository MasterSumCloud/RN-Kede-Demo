import React, {Component} from 'react';

import {
	View,
	Text,
	StyleSheet,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native';

let LeftItem = require('./ItemLeftCatetory');
let Righttem = require('./ItemRightCatetory');
let ScreenUtil = require('../utils/ScreenUtil');
import data from '../../resource/data/category'

class CategoryScreen extends Component {

	constructor(props){
        super();
		this.state = {
            mMainData:data.Data,
			leftSelctPosition:0,
		}
    }

	render(){
		return(
			<View style={styles.container}>
				<View style={styles.left_categtoy_fl}>
                    <FlatList
                        style={styles.fl_left}
                        ItemSeparatorComponent={()=>{return <View style={{height:1,backgroundColor:'#EFEFEF'}}/>}}
                        data={this.state.mMainData}
                        keyExtractor={(item, index) => index+''}
                        renderItem={(item) => {
							return (<TouchableWithoutFeedback onPress={()=>{
								this.setState({
                                    leftSelctPosition:item.index
								});
							}}>
								{LeftItem.Item(this, item,this.state.leftSelctPosition)}
							</TouchableWithoutFeedback>);
                        }}
                    />
				</View>

                <View style={styles.right_categtoy_fl}>
                    <FlatList
                        data={this.state.mMainData[this.state.leftSelctPosition].ChildAppClassDTO}
                        keyExtractor={(item, index) => index+''}
                        renderItem={(item) => {
                            return Righttem.Item(item)
                        }}
                    />
				</View >
			</View>
		)
	}
}

export default CategoryScreen;


const styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'row',
        backgroundColor:'white'
    },
    left_categtoy_fl:{
		width:ScreenUtil.scaleSize(180)
	},
    right_categtoy_fl:{
		flex:1,
	},
    flv_layout:{
		flexDirection:'row',

	},
    fl_left:{
		backgroundColor:'#F7F8F5'
	}
});
