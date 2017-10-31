import React, { Component } from 'react';
import { Text, StyleSheet, View, AsyncStorage, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Button from "./Button";
import { red } from "../utils/colors";
import { addCardToDeck } from '../utils/api';
import { addCard } from '../actions';

class AddCard extends Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        const title = navigation.state.params

        return {
            title: 'Add card to ' + title,
        };
    };

    _addCard = () => {
        const { question, answer } = this.state
        const { params } = this.props.navigation.state

        const card = { question, answer }
        const deck = params

        if (question, answer) {
            addCardToDeck(deck, card).then(() => {
                this.props.dispatch(addCard(deck, card))
                this.props.navigation.goBack();
            })
        } else {
            alert('Please provide both Question and Answer.')
        }
    }

    state = {
        question: '',
        answer: ''
    }

    render() {
        return (
            <View style={styles.container}>

                <TextInput
                    value={this.state.question}
                    style={styles.input}
                    placeholder="Enter question"
                    onChangeText={question => this.setState({ question })} />

                <TextInput
                    value={this.state.answer}
                    style={styles.input}
                    placeholder="Enter Answer"
                    onChangeText={answer => this.setState({ answer })} />

                <Button style={styles.submitText} onPress={this._addCard} title='Add card' />

            </View>

        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(AddCard)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
    },
    h1: {
        fontSize: 22,
    },
    input: {
        width: '90%',
        height: 50,
        padding: 8,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        margin: 10,
    },
    submitText: {
        marginTop: 10,
        width: '90%'
    },
});