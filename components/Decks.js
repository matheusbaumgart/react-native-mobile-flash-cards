import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, AsyncStorage } from 'react-native'
import { red, white } from "../utils/colors";
import { connect } from 'react-redux';
import { fetchDecksAction } from '../actions';
import DeckCard from "./DeckCard";

class Decks extends Component {
    state = {
        decks: {}
    }

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

    componentDidMount() {
        this.props.dispatch(fetchDecksAction()).then(decks => this.setState({ 'decks': decks }))
    }

    render() {
        var decksData = Object.values(this.state.decks);

        return (
            <View style={styles.cardList}>
                <FlatList
                    data={decksData}
                    renderItem={({ item }) => <DeckCard key={item.title} title={item.title} questions={item.questions} />}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

export default connect()(Decks)

const styles = StyleSheet.create({
    cardList: {
        flex: 1,
        paddingTop: 22
    },
})