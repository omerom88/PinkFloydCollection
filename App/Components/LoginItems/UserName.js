import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default class UserName extends Component {
    render() {
        return (
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="USER NAME: "
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
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff',
        fontSize: 16,
    },
    inputWrapper: {
        flex: 1,
    },
});