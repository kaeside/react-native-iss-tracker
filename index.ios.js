/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, {Component} from 'react';

import {
    AppRegistry,
    Text,
    View,
    TabBarIOS
} from 'react-native';

import TrackerMap from './TrackerMap';


class ISSTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tracker'
        };
    }
    handleClick(){
            return(
                <TabBarIOS selectedTab={this.state.selectedTab}>
                    <TabBarIOS.Item selected={this.state.selectedTab === 'tracker'} systemIcon="search"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'tracker'
                        })
                    }}>
                        <TrackerMap onClick={this.handleClick}/>
                    </TabBarIOS.Item>
                </TabBarIOS>
            )
    }
    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item selected={this.state.selectedTab === 'tracker'} systemIcon="search"
                onPress={() => {
                    this.setState({
                        selectedTab: 'tracker'
                    })
                }}>
                    <TrackerMap onClick={this.handleClick}/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('ISSTracker', () => ISSTracker);
