import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

// export default class Header extends Component {
//     // constructor(props) {
//     //     super(props);
//     //
//     //     this.state = {
//     //         image: {
//     //
//     //         }
//     //     }
//     // }
//
//     render() {
//         return (
//             <View/>
//         )
//     }
// }

const styles = StyleSheet.create({
   container: {
       flexDirection: 'row',
       height: 80,
       alignItems: 'center',
       justifyContent: 'space-between',
       backgroundColor: '#000',
       paddingHorizontal: 15
   },
    logo: {
        width: 120,
        height: 40
    }
});

const Header = props => (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => props.toggle() }>
            <Icon
                name="bars"
                color="white"
                size={25}
            />
        </TouchableWithoutFeedback>
        <Image style={styles.logo} source={require('../images/logo.png')} />
        <Icon
            name="search"
            color="white"
            size={25}
        />
    </View>
);


export default Header