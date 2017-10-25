import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { title, color, onPress } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={[styles.btn, styles[color]]}>
                <Text style={color === 'outlined' ? [styles.text, styles.textOutline] : styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        width: '80%',
        padding: 10,
        borderRadius: 3,
        borderWidth: 2,
        borderColor: '#333',
        backgroundColor: '#333',

    },
    outlined: {
        color: '#333',
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    textOutline: {
        color: '#333'
    }
})


Button.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func.isRequired
}