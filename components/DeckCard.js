import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { red, white } from "../utils/colors";
import { withNavigation } from 'react-navigation'

class DeckCard extends Component {

    render() {
        const { title, questions, navigation } = this.props
        return (
            <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('Deck', {title, questions})}>
                <View>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardCounter}>{questions.length} cards</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    cardItem: {
        margin: 15,
        padding: 10,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        borderRadius: 3,
        shadowRadius: 1,
        shadowOpacity: 0.2,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 1
        },
    },
    cardTitle: {
        fontSize: 19,
        marginBottom: 5,
    },
    cardCounter: {
        textAlign: 'center',
        color: '#999'
    }
})

export default withNavigation(DeckCard)