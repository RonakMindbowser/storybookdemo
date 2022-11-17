import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import CenterView from '../CenterView';
import CustomButton from ".";

storiesOf('CustomButton', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('Blue theme', () => (
        <CustomButton
            onPress={() => console.log("CustomButton")}
            title={'Submit'}
            titleStyle={styles.blueText}
            containerStyle={styles.blueContainer}
        />
    ))
    .add('Dark theme', () => (
        <CustomButton
            onPress={() => console.log("CustomButton")}
            title={'Upload'}
            titleStyle={styles.darkText}
            containerStyle={styles.darkContainer}
        />
    )).add("With Border", () => (
        <CustomButton
            onPress={() => console.log("CustomButton")}
            title={'Button With Border'}
            titleStyle={styles.borderText}
            containerStyle={styles.borderContainer}
        />
    ))
    .add("With Loader", () => (
        <CustomButton
            onPress={() => console.log("CustomButton")}
            title={'Button With Border'}
            isLoading
            titleStyle={styles.borderText}
            containerStyle={styles.borderContainer}
        />
    ))

const styles = StyleSheet.create({
    blueContainer: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 10
    },
    blueText: {
        color: "white",
        fontSize: 16,
    },

    darkContainer: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 10
    },
    darkText: {
        color: "white",
        fontSize: 16,
    },

    borderContainer: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        padding: 10,
    },
    borderText: {
        color: "black",
        fontSize: 18
    }
})