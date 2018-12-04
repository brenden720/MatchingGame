import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Card from '../components/card.js';
import Grid from '../components/grid.js';
// import App from '../App.js';


class StartGame extends Component {
  // headerLeft gets rid of the back button, so that the game can be completed before it returns to home
  static navigationOptions = {
    title: 'StartGame',
    headerLeft: null,
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* Temporary here. Used to check whether I can return to home screen since I removed back button*/}
        {/* Pressing the image will return to home. Need to change it to return once game ends. */}
        <Grid />
      </View>
    );
  }
}

// StartGame.navigationOptions = {
//   title: 'StartGame'
// };

export default StartGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    margin: 2,
    padding: 10,
    height: 45,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: 'green'
  },
  button: {
    fontSize: 20,
    color: 'white'
  },
});
