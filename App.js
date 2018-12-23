import { createAppContainer, createStackNavigator} from 'react-navigation';

import LoginScreen from './App/Screens/LoginScreen'
import CollectionScreen from './App/Screens/CollectionScreen'
import React from "react";
import AlbumScreen from "./App/Screens/AlbumScreen";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from "./App/Reducers";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


export default class App extends React.Component {
    render() {
    return (
            <Provider store={store}>
            <AppContainer />
                </Provider>
        );
    }
}



const AppNavigator = createStackNavigator(
    {
      Login: LoginScreen,
      Collections: CollectionScreen,
      Album: AlbumScreen,
    },
    {
      initialRouteName: "Login"
    }
);

const AppContainer = createAppContainer(AppNavigator);
