import React, {Component} from 'react';
import {
	StyleSheet,
	Image,
	TouchableOpacity,
	Text,
	Dimensions
} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import HomeScreen from "./home/HomeScreen";
import DuwuScreen from "./duwu/DuwuScreen";
import CartScreen from "./cart/CartScreen";
import MineScreen from "./mine/MineScreen";
import SearchScreen from "./search/SearchScreen";
import CategoryScreen from "./category/CategoryScreen";
import * as Constant from "./utils/Constant";
let TabbarComponent = require('./component/TabbarComponent');


const TabBarNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarLabel: '首页',
				tabBarIcon: ({focused, tintColor}) => (
					<Image
						source={focused ? require('../resource/tab/tab_home_on.png') : require('../resource/tab/tab_home_off.png')}
						style={styles.tabBarItem}
					/>
				)

			}
		},
        Duwu: {
			screen: DuwuScreen,
			navigationOptions: {
				tabBarLabel: '毒物',
				tabBarIcon: ({focused, tintColor}) => (
					<Image
						source={focused ? require('../resource/tab/tab_duwu_on.png') : require('../resource/tab/tab_duwu_off.png')}
						style={styles.tabBarItem}
					/>
				)
			}
		},
        Category: {
			screen: CategoryScreen,
			navigationOptions: {
				tabBarLabel: '分类',
				tabBarIcon: ({focused, tintColor}) => (
					<Image
						source={focused ? require('../resource/tab/tab_category_on.png') : require('../resource/tab/tab_category_off.png')}
						style={styles.tabBarItem}
					/>
				)
			}
		},
		Cart: {
			screen: CartScreen,
			navigationOptions: {
				tabBarLabel: '购物车',
				tabBarIcon: ({focused, tintColor}) => (
					<Image
						source={focused ? require('../resource/tab/tab_cart_on.png') : require('../resource/tab/tab_cart_off.png')}
						style={styles.tabBarItem}
					/>
				)
			}
		},
		Mine: {
			screen: MineScreen,
			navigationOptions: {
				tabBarLabel: '我的',
				tabBarIcon: ({focused, tintColor}) => (
					<Image
						source={focused ? require('../resource/tab/tab_mine_on.png') : require('../resource/tab/tab_mine_off.png')}
						style={styles.tabBarItem}
					/>
				)
			}
		}
	}, {
		tabBarOptions: {
			activeTintColor: '#8EC31E',
			style: {
				backgroundColor: 'white'
			}
		}
	}
);


const StackNavigator = createStackNavigator(
	{
		Tab: {
			screen: TabBarNavigator,
		},
		Search:{
			screen:SearchScreen,
		},
		Category:{
			screen:CategoryScreen,
		}
	},
	{
		headerLayoutPreset:'center',
		navigationOptions:{
			// headerTitleStyle:{
			// 	flex:1,
			// 	textAlign:'center',
			// 	alignSelf:'center'
			// },
			headerBackImage:(
				<Image
					source={require('../resource/nav/nav_back_gray.png')}
					style={{width:44,height:44,marginLeft:15}}
				/>
			),
		}
	}
);



TabBarNavigator.navigationOptions = ({navigation}) => {
	const {routeName} = navigation.state.routes[navigation.state.index];
	let headerTitle = null;
	let headerLeft = null;
	let headerRight = null;
	switch (routeName) {
		case 'Home':{
			// headerTitle=(
			// 	<TouchableOpacity style={styles.searchBar} onPress={() => navigation.push('Search')}>
			// 		<Image
			// 			source={require('../resource/home/nav_search.png')}
			// 			style={styles.searchIcon}
			// 		/>
			// 		<Text style={{color:'#c0c0c0'}}>请输入搜索内容</Text>
			// 	</TouchableOpacity>
			// );
			// headerLeft=(
			// 	<TouchableOpacity onPress={() => navigation.push('Category')}>
			// 		<Image
			// 			source={require('../resource/home/nav_classify_char.png')}
			// 			style={{width:20,height:33.5,marginLeft:15}}
			// 		/>
			// 	</TouchableOpacity>
			// );
			// headerRight=(
			// 	<TouchableOpacity onPress={() => alert('联系客服')}>
			// 		<Image
			// 			source={require('../resource/home/nav_message_char.png')}
			// 			style={{width:20,height:30,marginRight:15}}
			// 		/>
			// 	</TouchableOpacity>
			// );

            headerTitle=TabbarComponent.TopSeacrchView(Constant.Title_Bar_bouth,navigation);

			break;
		}
		case 'Duwu':{
			headerTitle='毒物';
			break;
		}
		case 'Category':{
			headerTitle=TabbarComponent.TopSeacrchView(Constant.Tittle_Bar_Search_only,navigation);
			break;
		}
		case 'Cart':{
			headerTitle='购物车';
			break;
		}
		case 'Mine':{
			headerTitle='我的';
			break;
		}
	}

	return {
		headerTitle:headerTitle,
		headerLeft:headerLeft,
		headerRight:headerRight,
	}
};



export default StackNavigator;

const styles = StyleSheet.create({
	tabBarItem: {
		width: 20,
		height: 20,
	},
	searchBar:{
		width:Dimensions.get('window').width * 0.7,
		height:30,
		backgroundColor:'#e9e9ee',
		borderRadius:19,
		alignItems:'center',
		flexDirection:'row',
	},
	searchIcon:{
		width:20,
		height:20,
		margin:5,
		marginLeft:20
	}
});
