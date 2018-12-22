// AppNavigator.js
import React from 'react';
import {addNavigationHelpers, StackNavigator} from 'react-navigation';
import { connect } from 'react-redux';
import LoginScreen from "./Screens/LoginScreen";
import CollectionScreen from "./Screens/CollectionScreen";
import AlbumScreen from "./Screens/AlbumScreen";

export const AppNavigator = StackNavigator({
    Login: LoginScreen,
        Collections: CollectionScreen,
    Album: AlbumScreen,
},
{
    initialRouteName: "Login"
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator
        navigation={addNavigationHelpers({ dispatch, state: nav })}
    /> );

const mapStateToProps = state => ({
    nav: state.nav,
});


export default connect(mapStateToProps)(AppWithNavigationState);