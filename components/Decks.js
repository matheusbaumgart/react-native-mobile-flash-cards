import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, AsyncStorage, AlertIOS } from 'react-native'
import { lightPurp } from "../utils/colors";
import { connect } from 'react-redux';
import { recieveDecks, addDeck } from '../actions';
import { fetchDecks, createDeck } from '../utils/api';
import DeckCard from "./DeckCard";

class Decks extends Component {

    static navigationOptions = ({ navigation, screenProps }) => {
        const { navigate } = navigation

        const handleAddDeck = () => {
            AlertIOS.prompt(
                'Enter Deck Name',
                'Creating a deck will allow you to add questions to it and quiz yourself.',
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    {
                        text: 'Add Deck', onPress: deckName => {
                            const newDeck = { [deckName]: { title: deckName, questions: [] } };

                            createDeck(newDeck)
                            screenProps.dispatch(addDeck(newDeck));
                        }
                    },
                ],
                'plain-text'
            );
        }

        return {
            title: 'Decks',
            headerRight: (
                <TouchableOpacity onPress={handleAddDeck}>
                    <Text style={{ fontSize: 17, padding: 10, color: lightPurp }}>Add</Text>
                </TouchableOpacity>
            ),
        };
    };

    testFunc = () => {
        alert(1)
    }

    componentDidMount() {
        const { dispatch } = this.props;
        fetchDecks().then(decks => dispatch(recieveDecks(decks)));
    }

    render() {
        return (
            <View style={styles.cardList}>
                <FlatList
                    data={Object.values(this.props.decks)}
                    renderItem={({ item }) => <DeckCard key={item.title} title={item.title} questions={item.questions} />}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        decks: state.decks,
    };
}

const styles = StyleSheet.create({
    cardList: {
        flex: 1,
        paddingTop: 22
    },
})

export default connect(mapStateToProps)(Decks)