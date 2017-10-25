import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

// function getColor(props) {
//     switch (props.color) {
//         case 'primary':
//             return 'green'
//             break;
//         case 'secondary':
//             return 'red'
//         default:
//             return '#999'
//             break;
//     }
// }

const ButtonView = styled.TouchableOpacity`
    padding-top: 12px;
    padding-bottom: 12px;
    width: 200px;
    borderRadius: 3px;
    background-color: ${props => props.primary ? '#333' : 'transparent'};
    border: ${props => props.primary ? '2px solid #333' : '2px solid #CCC'};
`

const ButtonText = styled.Text`
    font-size: 16px;
    text-align: center;
    color: ${props => props.primary ? '#FFF' : '#333'};
`

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { title, color, onPress } = this.props;
        return (
            <ButtonView onPress={onPress} {...this.props}>
                <ButtonText {...this.props}>
                    {title}
                </ButtonText>
            </ButtonView>
        );
    }
}

Button.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func.isRequired
}