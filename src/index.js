import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import List from './components/List';

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

export default class App extends Component {
    render() {
        return (
            <List/>
        );
    }
}