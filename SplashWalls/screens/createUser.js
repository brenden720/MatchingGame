import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet } from 'react-native';
import Button from 'react-native-button';

class CreateUser extends Component {
  static navigationOptions = {
    title: 'CreateUser',
    headerLeft: null,
  }

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.textData}>Username: </Text>
          <TextInput
            // style={{ height: 40 }}
            placeholder="Enter Username"
            style={styles.textBox}
            onChangeText={(text) => this.setState({ text })}
          />
          <Button
            onPress={() => navigate('StartGame')}
            containerStyle={styles.buttonContainer}
            style={styles.button}>
            Start Game
          </Button>
        </View>

      </View>
    );
  }
}

// <TouchableHighlight onPress={() => navigate('HomeScreen')}>
//   <Grid />
// </TouchableHighlight>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  innerContainer: {
    flex: 0.8,
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
  textData: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textBox: {
    margin: 20,
  }
});

export default CreateUser;