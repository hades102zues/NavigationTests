import React from 'react';
import {
	createStackNavigator,
	createBottomTabNavigator,
	createAppContainer
} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';


import HomeScreen from './Home';
import FeedScreen from './Feed';
import SettingsScreen from './Settings';

const HomeStack = createStackNavigator({
	Home: HomeScreen,
	Feed: FeedScreen
});

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
	Feed: FeedScreen
});

const BottomTab = createBottomTabNavigator({
	Home: {
		screen: HomeStack,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon : (props) => (<Icon name="ios-home" size={24} />)
		}
	},
	Settings: {
		screen : SettingsStack,
		navigationOptions : {
			tabBarLabel : 'Settings',
			tabBarIcon : (props) => (<Icon name="ios-settings" size={24} />)
		}
	}
});


export default createAppContainer(BottomTab);