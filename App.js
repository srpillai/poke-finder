import React from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import {Button} from 'native-base';
import Landing from './src/Landing';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Landing />
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
