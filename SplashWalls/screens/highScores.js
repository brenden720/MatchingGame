import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


const HighScores = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Username: HackReactor      Score: 20</Text>
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Username: HackReactor      Score: 19</Text>
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Username: HackReactor      Score: 18</Text>
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Username: HackReactor      Score: 17</Text>
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Username: HackReactor      Score: 16</Text>
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Username: HackReactor      Score: 15</Text>
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Username: HackReactor      Score: 10</Text>

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
