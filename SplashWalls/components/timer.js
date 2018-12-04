import React, { Component } from "react";
import { StyleSheet, Button, View } from "react-native";
import TimerCountdown from "./TimerCountdown";
import Button from 'react-native-button';


const Timer = () => (
  <Button
    // onPress={() => navigate('About')}
    containerStyle={styles.buttonContainer}
    style={styles.button}
  >
    <TimerCountdown
      initialSecondsRemaining={1000 * 60}
      onTick={secondsRemaining => console.log("tick", secondsRemaining)}
      onTimeElapsed={() => console.log("complete")}
      allowFontScaling={true}
      style={{ fontSize: 20 }}
    />
  </Button>
);

export default Timer;

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