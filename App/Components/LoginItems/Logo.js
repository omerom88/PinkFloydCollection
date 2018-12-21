import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../../Assets/pink-floyd-logo.png';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={logoImg} style={styles.image} />
                <Text style={styles.text}>ALBUMS COLLECTION</Text>
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
        width: 180,
        height: 180,
        resizeMode: 'contain',
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        fontSize: 18,
    },
});