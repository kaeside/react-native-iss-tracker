/*
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import TrackerMap from './TrackerMap';

import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class TrackerNav extends Component {
  render() {
    return (
        <NavigatorIOS style={styles.container} initialRoute={{
            title: 'ISS Tracker',
            component: TrackerMap
        }}/>
    );
  }
}

module.exports = TrackerNav;
