import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, Image, Text, View, TouchableOpacity, InputAccessoryView, Platform, Button } from "react-native";
import Colors from "../../../src/theme/Colors";
import { FontSize } from "../../../src/theme/Fonts";

const CountryCodeAndPhoneInput = ({
    onChangeText, onPress, editable, imageSource,
    placeholder, value, width, containerStyle, activeOpacity, showLeftIcon,
    titleText, wrapperStyle,
    isError,
    errorMessage,
    inputRef,
    titleStyle,

    countryCode,
    countryFlag,
    onPressCountryCode,
    onPressPhoneNext,
    ...rest

}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isErr, setIsError] = useState(false);
    useEffect(() => {
        setIsError(isError);
    }, [isError]);
    return (
        <View style={wrapperStyle}>
            {
                (!titleText) ? null :
                    <Text style={[styles.titleText, titleStyle]}>{titleText}</Text>
            }
            <View
                style={[styles.inputView, containerStyle]}
            >
                <TouchableOpacity style={styles.countryCodeView}
                    onPress={onPressCountryCode}
                >
                    <Text style={[styles.countryCode]}>{countryCode ? "+" + countryCode : "+1"}</Text>
                </TouchableOpacity>
                <TextInput
                    editable={editable}
                    style={styles.input}
                    onChangeText={onChangeText}
                    underlineColorAndroid={'transparent'}
                    value={value}
                    placeholder={placeholder}
                    keyboardType={'numeric'}
                    ref={inputRef}
                    onFocus={e => {
                        setIsFocused(true);
                        setIsError(false);
                    }}
                    onBlur={e => {
                        setIsFocused(false);
                    }}
                    autoCorrect={false}
                    placeholderTextColor={'gray'}
                    autoCompleteType="off"
                    blurOnSubmit={false}
                    inputAccessoryViewID={'Done'}
                    maxLength={10}
                    {...rest}
                />
                {
                    Platform.OS == "ios" ?
                        <InputAccessoryView nativeID="Done">
                            <View style={styles.inputAccessory}>
                                <Button title={'next'} onPress={onPressPhoneNext} />
                            </View>
                        </InputAccessoryView>
                        : null
                }
            </View>
            {
                isError ?
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    : null
            }
        </View >
    )
}

export default CountryCodeAndPhoneInput;

const styles = StyleSheet.create({
    titleText: {
        color: Colors.primary,
        fontSize: FontSize.Text,
        paddingBottom: 5
    },
    errorMessage: {
        color: Colors.tab_inactive_color,
        fontSize: FontSize.ExtraSmallText,
        paddingTop: 5
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.blue,
        height: 48,
    },
    countryCode: {
        fontSize: FontSize.SubHeading,
        color: Colors.neutral2,
        marginHorizontal: 4
    },
    input: {
        height: 48,
        alignSelf: "flex-start",
        fontSize: FontSize.SubHeading,
        marginRight: 20,
        color: Colors.neutral2,
        flex: 1,
        paddingLeft: 10,
    },
    inputAccessory: {
        backgroundColor: Colors.inputAccessoryBg,
        alignItems: "flex-end",
        paddingHorizontal: 5,
        height: 35,
    },
    countryCodeView: {
        flexDirection: "row",
        alignItems: "center",
        borderRightWidth: 1,
        borderColor: Colors.neutral8,
        justifyContent: "center",
        paddingHorizontal: 8
    },
    flagStyle: {
        height: 15,
        width: 25
    }
})