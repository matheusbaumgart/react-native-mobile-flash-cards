import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Button from "./Button";
import { createDeck } from "../utils/api";

export default class NewDecks extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Add New Deck',
    });

    state = {
        deckName: ''
    }

    addNewDeck = () => {
        const deckName = this.state;
        const newDeck = { [deckName]: { title: deckName, questions: [] } };
        
        createDeck(newDeck)
    }

    render() {
        const { goBack } = this.props.navigation;

        return (
            <View style={style.container}>
                <Text>What is the title of your new deck ?</Text>

                <TextInput
                    value={this.state.deckName}
                    style={style.input}
                    onChangeText={deckName => this.setState({ deckName })} />

                <Button onPress={this.addNewDeck} title="Add Deck" />

            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    input: {
        width: 300,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        margin: 24,
    },
    submitText: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
    },
});


