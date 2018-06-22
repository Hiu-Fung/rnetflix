import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import List from './components/List';
import Slider from './components/Slider';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#000',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default class App extends Component {
    render() {
        return (
            <View style={[{ flex: 1 }, styles.container]}>
                <Slider/>
                <List/>
            </View>
        );
    }
}