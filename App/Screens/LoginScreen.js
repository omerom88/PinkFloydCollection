import React from 'react';
import {TouchableOpacity, ScrollView, Text, StyleSheet, Dimensions, View} from "react-native";

import Logo from "../Components/LoginItems/Logo"
import UserName from "../Components/LoginItems/UserName"
import UserPassword from "../Components/LoginItems/UserPasword"

const { width, height } = Dimensions.get('window');

export default class LoginScreen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.scrollStyle}>
                <View style={styles.container}>
                    <Logo />
                    <UserName />
                    <UserPassword />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.push('Collections')}>
                        <Text style={styles.text}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollStyle :{
        backgroundColor: 'rgb(211,211,211)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        height: height * 0.05,
        width: width * 0.4,
        borderRadius: 20,
        justifyContent: 'center',
        textAlign: 'center'

    },
    text: {
        color : 'rgba(0, 0, 0, 0.5)',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
});
