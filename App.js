import './ReactotronConfig'

import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
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

const store = createStore(reducer);

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