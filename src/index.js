import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import SideMenu from 'react-native-side-menu';

import Header from './components/Header';
import Slider from './components/Slider';
import List from './components/List';
import Menu from './components/Menu';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#000',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        console.log('toggle');
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    updateMenu(isOpen) {
        this.setState({ isOpen })
    }

    render() {
        return (
            <View style={[{ flex: 1 }, styles.container]}>
                <SideMenu
                    menu={'test'}
                    isOpen={this.state.isOpen}
                    onChange={isOpen => this.updateMenu(isOpen)}
                >
                    <Header toggle={this.toggle}/>
                    <Slider/>
                    <List/>
                </SideMenu>
            </View>
        );
    }
}