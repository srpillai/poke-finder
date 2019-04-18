import React from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import {Button} from 'native-base';

var myBackground = require('./assets/landing.jpg');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
         <Image source={myBackground}/>
      </View>
    );
  }
}

const styles = ({
  container: {
    flex: 1,
    marginTop: 24
  },
});
