import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const HighScores = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Some deffscription here</Text>
    </View>
  );
};

export default HighScores;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
