import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native';

import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const Slider = props => ( <View style={styles.container}>
        <Image style={styles.image} source={props.uri}/>
    </View>
);

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imagesSlider: [
                require('../images/1.jpg'),
                require('../images/2.jpg'),
                require('../images/3.jpg'),
            ]
        }
    }

    render() {
        return (
            <View style={{ height: 240 } }>
                <Swiper
                    autoplay
                    autoplayTimeout={3.5}
                >
                {
                    this.state.imagesSlider.map(( item, i ) => <Slider
                        uri={item}
                        key={i}
                    />)
                }
                </Swiper>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width
    },
};
