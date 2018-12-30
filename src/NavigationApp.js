import {
	createStackNavigator,
	createBottomTabNavigator,
	createAppContainer
} from 'react-navigation';

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
	Home: HomeStack,
	Settings: SettingsStack
});


export default createAppContainer(BottomTab);