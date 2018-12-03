import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={{ margin: 10, fontSize: 20, paddingBottom: 10 }}>
        This game was created to practice with React Native.
        It is a simple memory game where all tiles are displayed on screen, then flipped over.
        The player needs to choose two tiles. If the tiles match, they are removed from the game board.
        Once all tiles are removed, the person's name is added to the high scores list.
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
