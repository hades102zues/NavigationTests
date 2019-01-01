import React,  { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={{uri: 'https://i.ytimg.com/vi/rUmXDhEtty0/maxresdefault.jpg'}}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}



class Settings extends Component {

	static navigationOptions = {
		
		headerTintColor: 'white',
		headerStyle : {
			backgroundColor: 'green'
		},
		headerTitle: (<Image
        source={{uri: 'https://i.ytimg.com/vi/rUmXDhEtty0/maxresdefault.jpg'}}
        style={{ width: 30, height: 30 }}
      />)
	};

	render() {
		return (
			<View>
				<Text>Settings</Text>
				<Button 
					title="Feed"
					onPress={()=>this.props.navigation.navigate('Feed')}
				/>
			</View>
		);
	}
}

export default Settings;