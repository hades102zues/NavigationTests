import React,  { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Home extends Component{

	static navigationOptions = {
		title: 'Home'
	};

	render() {
		return (
			<React.Fragment>
				<View>
					<Text>Home</Text>
					<Button 
					title="Feed"
					onPress={()=>this.props.navigation.navigate('Feed')}
					/>
					
				</View>
			</React.Fragment>
		);
	}
}

export default Home;

