import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Button from './Button';
import { createDeck } from '../utils/api';

import { connect } from 'react-redux';
import { addDeck } from '../actions'

class NewDeck extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Add New Deck',
    });

    state = {
        deckName: ''
    }

    addNewDeck = () => {
        const { deckName } = this.state;
        const { navigation } = this.props;

        const newDeck = { [deckName]: { title: deckName, questions: [] } };

        createDeck(newDeck)
        this.props.dispatch(addDeck(newDeck));

        Alert.alert(
            `Deck ${deckName} created.`, 'Great job! Now add some cards to it.',
            [
                {
                    text: 'View deck', onPress: () => navigation.navigate('Deck', {
                        title: deckName,
                        questions: []
                    })
                },
            ],
        );

        this.setState({ deckName: '' });

    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.h1}>Name your new deck</Text>

                <TextInput
                    value={this.state.deckName}
                    style={style.input}
                    onChangeText={deckName => this.setState({ deckName })} />

                <Button onPress={this.addNewDeck} title="Add New Deck" />

            </View>
        );
    }
}

export default connect()(NewDeck);

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
    },
    h1: {
        fontSize: 22,
    },
    input: {
        width: 300,
        height: 50,
        padding: 8,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        margin: 24,
    },
    submitText: {
        color: '#fff',
        fontSize: 22,
    },
});


