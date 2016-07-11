/*
 * @flow
 */
'use strict';

import React, {Component} from 'react';
// import MapView from 'react-native-maps';
import GoogleStaticMap from 'react-native-google-static-map';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';


var REQUEST_URL = 'http://api.open-notify.org/iss-now.json';
class TrackerMap extends Component {
    static propTypes = {}
    constructor(props) {
        super(props);
        this.state = {
            iss_latitude: 30.267153,
            iss_longitude: -97.74306079999997,
            isLoading: true
        };
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        fetch(REQUEST_URL).then((response) => response.json()).then((responseData) => {
            this.setState({
                iss_latitude: responseData.iss_position.latitude,
                iss_longitude: responseData.iss_position.longitude,
                iss_timestamp: responseData.timestamp,
                isLoading: false
            });
        }).done();
    }
    render() {
        var lat = this.state.iss_latitude;
        var lng = this.state.iss_longitude;
        const issLocation = {
            latitude: '' + lat,
            longitude: '' + lng,
            zoom: 3,
            size: {
                width: 300,
                height: 550
            }
        }
        return (
            <View style={styles.content}>
                <Text style={styles.title}>ISS Tracker</Text>
                <GoogleStaticMap style={styles.map} {...issLocation}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4d4d4d'
    },
    title: {
        color: 'white',
        fontSize: 32,
        paddingVertical: 15
    },
    map: {
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1
    }
});

module.exports = TrackerMap;
