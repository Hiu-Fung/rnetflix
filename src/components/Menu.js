import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');
const selectableMenuItems = [
    { name: 'Home' },
    { name: 'Available for Download' },
    { name: 'Netflix Original' },
    { name: 'TV Shows' },
    { name: 'Actions & Adventure' },
    { name: 'Children & Family Movies' },
    { name: 'Comedies' },
    { name: 'Documentaries' },
    { name: 'Dramas' },
    { name: 'Independent Movies' },
    { name: 'Indian Movies' },
];

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedMenuItem: Math.random() > 0.5 ? 'Home' : 'Dramas',
        }

        this.renderSelectableMenuItem.bind(this);
    }

    renderSelectableMenuItem(item) {
        const { selectedMenuItem } = this.state;
        return (
            <View key={item.name} style={item.name === selectedMenuItem ? [styles.item, styles.selected] : [styles.item]}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.menu}>
                <View style = {styles.avatarContainer}>
                    <View style = {styles.avatar}>
                        <Image
                            style = {styles.avatarImage}
                            source={require('../images/user.png')}
                        />
                    </View>
                    <Text style={styles.text}>Sunchild</Text>
                    <Icon
                        name="exchange"
                        color="#fff"
                        size={25}
                    />
                </View>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.iconWithTextContainer}>
                        <View style={styles.iconWithText}>
                            <Icon
                                style={styles.icon}
                                name="download"
                                color="#fff"
                                size={28}
                            />
                            <Text style={styles.text}>My Downloads</Text>
                        </View>
                        <Icon
                            style={styles.rightIcon}
                            name="angle-right"
                            color="#fff"
                            size={25}
                        />
                    </View>
                    <View style={styles.iconWithTextContainer}>
                        <View style={styles.iconWithText}>
                            <IonIcons
                                style={styles.icon}
                                name="md-checkmark"
                                color="#fff"
                                size={28}
                            />
                            <Text style={styles.text}>My List</Text>
                        </View>
                        <Icon
                            style={styles.rightIcon}
                            name="angle-right"
                            color="#fff"
                            size={25}
                        />
                    </View>
                    {selectableMenuItems.map(item => this.renderSelectableMenuItem(item))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        height,
        // width,
        backgroundColor: "#191919",
        paddingVertical: 15,
        width: width * 2 / 3,
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#000',
        borderBottomWidth: 3,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    avatarImage: {
        width: 60,
        height: 60,
        // marginRight: 20

    },
    scrollContainer: {

    },
    text: {
        color: "#b3b3b3",
        fontSize: 20,
    },
    iconWithTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        borderColor: '#000',
        borderBottomWidth: 3,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    iconWithText: {
        flexDirection: 'row',
        alignItems: "center"
        // justifyContent: 'space-between',
    },
    icon: {
        marginRight: 20,
    },
    rightIcon: {
        marginRight: 0
    },
    item: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        // marginTop: 5,
        marginLeft: 5,
    },
    selected: {
        marginLeft: 0,
        borderLeftWidth: 5,
        borderColor: 'red'
    },

    itemSelected: {
        borderLeftWidth: 5,
        borderColor: 'red'
    },
    noSelectedItems: {
        paddingHorizontal: 15,
        paddingVertical: 25,
    }
});

export default Menu;