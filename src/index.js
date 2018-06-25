import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import SideMenu from 'react-native-side-menu';

import Header from './components/Header';
import Slider from './components/Slider';
import List from './components/List';
import Menu from './components/Menu';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        // alignItems: 'center',
        // justifyContent: 'center',
    }
});

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            overlayOpacity: 0
        };

        this.toggle = this.toggle.bind(this);
        // this.animationStyle = this.animationStyle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    updateMenu(isOpen) {
        this.setState({ isOpen })
    }

    render() {
        const { overlayOpacity } = this.state;

        return (
            <View style={styles.container}>
                <SideMenu
                    menu={<Menu />}
                    isOpen={this.state.isOpen}
                    onChange={isOpen => this.updateMenu(isOpen)}
                >
                    <View style={styles.container}>
                        <Header toggle={this.toggle}/>
                        <Slider/>
                        <List/>
                    </View>
                </SideMenu>
            </View>
        );
    }
}