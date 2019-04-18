import React from 'react';
import {View,Text, Image} from 'react-native';
import {Button} from 'native-base';

var myBackground = require('../assets/landing.jpg');

class Landing extends React.Component{
	render(){
		return(
			<View>
				<Image source={myBackground}>
		          
		        </Image>
			</View>
		)
	}
}

const styles = {
	viewStyle: {
	    flex: 1,
	    flexDirection: 'column',
	    justifyContent: 'center',
	    alignItems: 'center'
	  },
	  titleStyle: {
	    fontSize: 30,
	    color: 'blue',
	    alignItems: 'center'
	  },
	  buttonStyle: {
	    margin: 10
	  },
	  buttonText: {
	    color: 'white'
	  }
}

export default Landing;