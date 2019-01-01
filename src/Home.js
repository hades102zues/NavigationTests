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
			<View style={styles.MainView}>
				<View style={styles.Buttons}>
						<Button 
						title="Feed"
						onPress={()=>this.props.navigation.navigate('Feed')}
						/>

						<Button 
						title="Settings"
						onPress={()=>this.props.navigation.navigate('Settings')}
						/>
				</View>
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	
	MainView : { 
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},

	Buttons : {
		width: '50%',
	},

});
export default Home;

