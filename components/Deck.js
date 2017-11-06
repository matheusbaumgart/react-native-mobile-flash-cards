import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Button from "./Button";
import { red } from "../utils/colors";
import { deleteDeck } from '../utils/api';
import { removeDeck } from '../actions';

class Deck extends Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        const title = navigation.state.params
        return {
            title: title,
            headerRight: (
                <TouchableOpacity onPress={() => {
                    deleteDeck(title).then(() => {
                        screenProps.dispatch(removeDeck(title))
                        navigation.navigate('Decks')
                    })
                }}>
                    <Text style={{ fontSize: 17, padding: 10, color: red }}>Delete</Text>
                </TouchableOpacity>
            ),
        };
    };

    render() {
        let deckTitle = this.props.navigation.state.params
        const deck = this.props.decks[deckTitle];

        return deck ?
            <View style={styles.container}>
                <Text style={styles.deckTitle}>{deck.title}</Text>
                <Text style={styles.deckCounter}>{deck.questions.length} cards</Text>
                <View style={{ marginTop: 80, width: '100%', paddingLeft: 20, paddingRight: 20 }}>
                    <Button title="Add Card" color="outlined" onPress={() => { this.props.navigation.navigate('AddCard', deck.title) }} />
                    <Button title="Start Quiz" onPress={() => { this.props.navigation.navigate('Quiz', deck.questions) }} />
                </View>
            </View> 
            : <View style={styles.container}></View>



    }
}

function mapStateToProps(state) {
    return {
        decks: state.decks,
    };
}

export default connect(mapStateToProps)(Deck)

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