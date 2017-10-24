import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { red } from "../utils/colors";

export default class Decks extends Component {

    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation
        return {
            title: 'Decks',
            headerRight: (
                <TouchableOpacity onPress={() => navigate('NewDeck')}>
                    <Text style={{ fontSize: 17, padding: 10, color: red }}>Add</Text>
                </TouchableOpacity>
            ),
        };
    };

    render() {
        return (
            <View>
                <Text>Decks</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    card: {

    }
})