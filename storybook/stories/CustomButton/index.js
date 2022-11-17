import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

const CustomButton = ({
    onPress,
    children,
    title,
    titleStyle,
    containerStyle,
    isLoading,
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            {
                isLoading ?
                    <ActivityIndicator size={'large'} color={'blue'} />
                    :
                    <Text style={titleStyle}>{title}</Text>
            }
        </TouchableOpacity>
    )
}

export default CustomButton;

CustomButton.defaultProps = {
    children: null,
    onPress: () => { },
    title: "",
    containerStyle: {},
    titleStyle: {}
};

CustomButton.propTypes = {
    children: PropTypes.node,
    onPress: PropTypes.func,
    title: PropTypes.string,
    containerStyle: PropTypes.any,
    titleStyle: PropTypes.any,
};
