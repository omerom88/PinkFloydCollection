import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class UserPassword extends Component {
    render() {
        return (
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="PASSWORD: "
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    input: {
        marginTop: height * 0.05,
        marginBottom: height * 0.1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        height: height * 0.05,
        width: width * 0.8,
        paddingLeft: width * 0.1,
        borderRadius: 20,
        color: '#ffffff',
        fontSize: 16,
        textAlignVertical: 'center',
    },
    inputWrapper: {
        flex: 1,
        alignItems: 'center'
    },
});