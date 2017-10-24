import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { purple, white } from './utils/colors';

const MainNavigator = StackNavigator({
  Decks: {
    screen: Decks
  },
  NewDeck: {
    screen: NewDeck
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MainNavigator />
      </View>
    );
  }
}