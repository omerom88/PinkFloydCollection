import React from 'react';
import {TouchableOpacity, ScrollView, Text, StyleSheet} from "react-native";

import Logo from "../Components/LoginItems/Logo"
import UserName from "../Components/LoginItems/UserName"
import UserPassword from "../Components/LoginItems/UserPasword"

export default class LoginScreen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Logo />
                <UserName />
                <UserPassword />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.push('Collections')}>
                    <Text style={styles.text}>LOGIN</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(211,211,211)'
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        height: 40,
        marginHorizontal: 100,
        borderRadius: 20,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
});
