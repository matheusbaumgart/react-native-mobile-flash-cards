import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'

export default class NewDecks extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Add New Deck',
    });

    render() {
        const { goBack } = this.props.navigation;

        return (
            <View>
            </View>
        );
    }
}