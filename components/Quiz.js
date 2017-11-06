import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Button from "./Button";
import { lightPurp } from "../utils/colors";

class Quiz extends Component {

    state = {
        questionIndex: 0,
        correctAnswers: 0,
        showAnswer: false,
    }

    onCorrect = () => {
        const { questionIndex, correctAnswers } = this.state;
        this.setState({ questionIndex: questionIndex + 1, correctAnswers: correctAnswers + 1 });
    };

    onIncorrect = () => {
        this.setState({ questionIndex: this.state.questionIndex + 1 });
    };

    showToggle = () => {
        this.setState({ showAnswer: !this.state.showAnswer });
    }

    restartQuiz = () => {
        this.setState({ questionIndex: 0, correctAnswers: 0, showAnswer: false });
    }

    backToDeck = () => {
        this.props.navigation.goBack();
    }

    render() {
        const { questionIndex, correctAnswers, showAnswer } = this.state
        let questions = this.props.navigation.state.params
        const isQuestionAvailable = questionIndex < questions.length

        return (
            <View style={{ flex: 1 }}>
                {isQuestionAvailable ? (
                    <View style={styles.container}>
                        <Text style={{ fontSize: 14 }}>{(questionIndex + 1) + ' / ' + questions.length}</Text>

                        {showAnswer ? (
                            <View>
                                <Text style={styles.question}>{questions[questionIndex].answer}</Text>
                                <TouchableOpacity onPress={this.showToggle} style={{ marginTop: 20 }}>
                                    <Text style={styles.showToggleBtn}>Show Question</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                                <View>
                                    <Text style={styles.question}>{questions[questionIndex].question}</Text>
                                    <TouchableOpacity onPress={this.showToggle} style={{ marginTop: 20 }}>
                                        <Text style={styles.showToggleBtn}>Show Answer</Text>
                                    </TouchableOpacity>
                                </View>
                            )}


                        <View style={{ marginTop: 80, width: '100%' }}>
                            <Button title="Correct" color="green" onPress={this.onCorrect} />
                            <Button title="Incorrect" color="red" onPress={this.onIncorrect} />
                        </View>
                    </View>
                ) : (
                        <View style={styles.container}>
                            <View>
                                <Text style={{ textAlign: 'center', fontSize: 28, marginTop: 20 }}>Your score:</Text>
                                <Text style={{ textAlign: 'center', fontSize: 50, marginTop: 20, color: 'green' }}>{correctAnswers}</Text>
                            </View>
                            <View style={{ marginTop: 80, width: '100%' }}>
                                <Button title="Restart Quiz" onPress={this.restartQuiz} />
                                <Button title="Back to Deck" color="noBorder" onPress={this.backToDeck} />
                            </View>
                        </View>
                    )
                }
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        decks: state.decks,
    };
}

export default connect(mapStateToProps)(Quiz)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    question: {
        textAlign: 'center',
        fontSize: 40,
        marginTop: 40,
        marginBottom: 5,
        height: 100
    },
    correctBtn: {

    },
    incorrectBtn: {

    },
    showToggleBtn: {
        fontSize: 16,
        color: lightPurp,
        textAlign: 'center',
        width: '100%',
        padding: 20
    }
});