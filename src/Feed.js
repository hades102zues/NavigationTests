import React, { Component } from 'react';
import { View, Text } from 'react-native';

class feed extends Component {

	static navigationOptions = {
		title: 'Feed',
		headerTintColor: 'white',
		headerStyle : {
			backgroundColor: 'red'
		},
	}; 

	render() {
		return (
			<View>
				<Text>Feed</Text>
			</View>
		);
	}
}

export default feed;