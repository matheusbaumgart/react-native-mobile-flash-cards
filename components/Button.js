import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { title, color, onPress } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={[styles.btn, styles[color]]} >
                <Text style={color === 'outlined' ? [styles.text, styles.textOutline] : styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        padding: 14,
        borderRadius: 3,
        borderWidth: 2,
        borderColor: '#333',
        backgroundColor: '#333',
        marginBottom: 15,

    },
    outlined: {
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 17,
        color: '#fff',
        textAlign: 'center',
    },
    textOutline: {
        color: '#333'
    }
})