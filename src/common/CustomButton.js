import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({
    onButtonPress,
    buttonStyle,
    textStyle,
    buttonText,
    disabled
}) => {
    return (
        <TouchableOpacity
            onPress={() => {
                onButtonPress()
            }}
            disabled={disabled}
            style={buttonStyle}
        >
            <Text style={textStyle}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton
