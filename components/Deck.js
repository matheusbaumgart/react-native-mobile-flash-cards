import React, { Component } from 'react';
import { Text, StyleSheet, View, AsyncStorage, TouchableOpacity } from 'react-native';
import Button from "./Button";
import { red } from "../utils/colors";
import { deleteDeck } from '../utils/api';
import { removeDeck } from '../actions';

export default class Deck extends Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        const { title } = navigation.state.params
        return {
            title: title,
            headerRight: (
                <TouchableOpacity onPress={() => {
                    deleteDeck(title).then(() => {
                        screenProps.dispatch(removeDeck(title));
                        navigation.navigate('Decks')
                    })
                }}>
                    <Text style={{ fontSize: 17, padding: 10, color: red }}>Delete</Text>
                </TouchableOpacity>
            ),
        };
    };

    render() {
        const { state } = this.props.navigation;
        return (
            <View style={styles.container}>
                {<Text style={styles.deckTitle}>{state.params.title}</Text>}
                {<Text style={styles.deckCounter}>{state.params.questions.length} cards</Text>}
                <View style={{ marginTop: 80, width: '100%', paddingLeft: 20, paddingRight: 20 }}>
                    <Button title="Add Card" color="outlined" onPress={() => { }} />
                    <Button title="Start Quiz" onPress={() => { }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deckTitle: {
        textAlign: 'center',
        fontSize: 32,
        marginTop: 20,
        marginBottom: 5,
    },
    deckCounter: {
        textAlign: 'center',
        fontSize: 18,
        color: '#999'
    },
});