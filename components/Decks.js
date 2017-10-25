import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { red, white } from "../utils/colors";
import DeckCard from "./DeckCard";

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
        var decksData = Object.values(data);
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

const data = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

const styles = StyleSheet.create({
    cardList: {
        flex: 1,
        paddingTop: 22
    },
})