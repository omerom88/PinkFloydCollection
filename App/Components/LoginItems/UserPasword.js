import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

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
        marginTop: 50,
        marginBottom: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 50,
        borderRadius: 20,
        color: '#ffffff',
        fontSize: 16,
        textAlignVertical: 'center',
    },
    inputWrapper: {
        flex: 1,
        justifyContent: 'center'
    },
});