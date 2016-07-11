//@flow

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the International Space Station Tracker!
        </Text>
        <Text style={styles.instructions}>
          To get started, click on the Search Button below.
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = About;
