import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 50, paddingBottom: 10 }}>Memory Game</Text>
        <Button
          onPress={() => navigate('StartGame')}
          containerStyle={styles.buttonContainer}
          style={styles.button}>
          Start Game
        </Button>
        <Button
          onPress={() => navigate('HighScores')}
          containerStyle={styles.buttonContainer}
          style={styles.button}>
          High Scores
        </Button>
        <Button
          onPress={() => navigate('About')}
          containerStyle={styles.buttonContainer}
          style={styles.button}>
          About
        </Button>
      </View>
    );
  }
}

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

export default HomeScreen;