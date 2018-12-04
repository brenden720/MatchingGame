/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Button from 'react-native-button';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/homeScreen.js';
import HighScores from './screens/highScores.js';
import About from './screens/about.js';
import StartGame from './screens/startGame.js';
import CreateUser from './screens/createUser.js';
import Grid from './components/grid.js';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
// export default class App extends Component {
//   render() {
//     return( 
//       <AppStackNavigator />
//     );
//   }
// }

const AppStackNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  StartGame: { 
    screen: StartGame,
  },
  HighScores: {
    screen: HighScores,
  },
  About: {
    screen: About,
  },
  CreateUser: {
    screen: CreateUser,
  },
  Grid: {
    screen: Grid,
  }
});

const App = createAppContainer(AppStackNavigator);
export default App;
