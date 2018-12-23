import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';

import logoImg from '../../Assets/pink-floyd-logo.png';

const { width, height } = Dimensions.get('window');

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={logoImg} style={styles.image} />
                <Text style={styles.text}>ALBUMS</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
    },
    image: {
        height: height * 0.3,
        width: width * 0.5,
        resizeMode: 'contain',
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        fontSize: 18,
        marginBottom: height * 0.1,
    },
});