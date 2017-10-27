import './ReactotronConfig'

import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import reducer from './reducers';

import Decks from './components/Decks'
import Deck from './components/Deck'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { purple, white } from './utils/colors';

const MainNavigator = StackNavigator({
    Decks: {
        screen: Decks,
    },
    Deck: {
        screen: Deck
    },
})

const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
)

export default class App extends React.Component {
    render() {
        // AsyncStorage.clear()
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <MainNavigator screenProps={{
                        dispatch: store.dispatch
                    }} />
                </View>
            </Provider>
        );
    }
}