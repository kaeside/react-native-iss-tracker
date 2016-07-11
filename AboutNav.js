/*
 * @flow
 */
'use strict';

import React, {Component} from 'react';

import {
    StyleSheet,
    NavigatorIOS
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
     }
});

class AboutNav extends Component {
    render() {
        return (
            <NavigatorIOS
            initialRoute={{
                title: 'About',
                component: About
            }}/>
        );
    }
}

module.exports = AboutNav;
