import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, AsyncStorage } from 'react-native'
import { lightPurp } from "../utils/colors";
import { connect } from 'react-redux';
import { getDecks } from '../actions';
import { fetchDecks } from '../utils/api';
import DeckCard from "./DeckCard";

class Decks extends Component {

    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation
        return {
            title: 'Decks',
            headerRight: (
                <TouchableOpacity onPress={() => navigate('NewDeck')}>
                    <Text style={{ fontSize: 17, padding: 10, color: lightPurp }}>Add</Text>
                </TouchableOpacity>
            ),
        };
    };

    componentDidMount() {
        const { dispatch } = this.props;
        fetchDecks().then(decks => dispatch(getDecks(decks)))
            .then(() => this.setState(() => ({ ready: true })));
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
        decks: state,
    };
}

const styles = StyleSheet.create({
    cardList: {
        flex: 1,
        paddingTop: 22
    },
})

export default connect(mapStateToProps)(Decks)