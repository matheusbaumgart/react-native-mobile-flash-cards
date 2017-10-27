import './ReactotronConfig'

import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import reducer from './reducers';

import Decks from './components/Decks'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { purple, white } from './utils/colors';

const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
)

const MainNavigator = StackNavigator({
    Decks: {
        screen: Decks
    },
    Deck: {
        screen: Deck
    },
    NewDeck: {
        screen: NewDeck
    }
})

export default class App extends React.Component {
    render() {
        // AsyncStorage.clear()
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <MainNavigator />
                </View>
            </Provider>
        );
    }
}