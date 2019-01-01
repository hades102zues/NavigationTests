import React,  { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends Component{

	static navigationOptions = {
		title: 'Home',
		headerTintColor: 'white',
		headerStyle : {
			backgroundColor: 'blue'
		}
	};

	render() {
		return (
			<View>
				<Text>Home</Text>
				<View style={styles.Buttons}>

					<View style={styles.buttonFeed}>
						<Button 
						title="Feed"
						onPress={()=>this.props.navigation.navigate('Feed')}
						/>
					</View>
					<View style={styles.buttonSettings}>
						<Button 
						title="Settings"
						onPress={()=>this.props.navigation.navigate('Settings')}
						/>
					</View>


				</View>
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	Buttons: {
		flexDirection : 'row',
	},
	buttonFeed: {
		width:'20%'
	},
	buttonSettings:{
		width:'20%'
	}
});
export default Home;

