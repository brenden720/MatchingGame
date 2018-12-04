import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Button from 'react-native-button';
import Grid from '../components/grid.js';


class StartGame extends Component {
  static navigationOptions = {
    title: 'Stressed',
    headerLeft: null,
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Grid navigation={() => { this.props.navigation }}/>
        <Button
          onPress={() => navigate('StartGame')}
          containerStyle={styles.buttonContainer}
          style={styles.button}>
          Restart Game
        </Button>
      </View>
    );
  }
}

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
    backgroundColor: 'green',
    width: 200,
  },
  button: {
    fontSize: 20,
    color: 'white',
    position: 'absolute',
    textAlign: 'center',
    left: 42,
    
  },
});
