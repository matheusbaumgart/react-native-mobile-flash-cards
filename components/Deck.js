import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Button from "./Button";

export default class Deck extends Component {
    static navigationOptions = (navigation) => {
        return {
            title: navigation.navigation.state.params.title,
        };
    };

    render() {
        const { state } = this.props.navigation;
        return (
            <View style={styles.container}>
                {<Text style={styles.deckTitle}>{state.params.title}</Text>}
                {<Text style={styles.deckCounter}>{state.params.questions.length} cards</Text>}

                <Button title="Add Card" color="outlined" />
                <Button title="Start Quiz" />
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