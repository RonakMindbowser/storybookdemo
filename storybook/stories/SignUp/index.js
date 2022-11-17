import React, { Fragment } from 'react';
import { Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import imageconstant from '../../../src/assets/imageconstant';
import Colors from '../../../src/theme/Colors';
import { FontSize } from '../../../src/theme/Fonts';
import InputField, { screenWidth } from '../Login/InputField';
import CountryCodeAndPhoneInput from './CountryCodeAndPhoneInput';

const SignUp = ({
    title,
    description,
    showProfilePicOption,
    uploadPhotoText,
    showNameOption,

    firstNamePlaceholder,
    firstNameTitle,

    lastNamePlaceholder,
    lastNameTitle,

    showPhoneInput,
    phoneNumberTitle,
    phoneNumberPlaceholder,

    emailTitle,
    emailPlaceholder,

    passwordTitle,
    passwordPlaceholder,

    showTermsAndCondition,

    onPressSignUp,
    signUpBtnName,
    withSocialLogin,

    onPressGoogle,
    onPressFacebook,
    onPressApple,
    countryCode,
    layoutColor,
    titleColor,
    descriptionColor,
}) => {
    return (
        <Fragment>
            <SafeAreaView style={[styles.container, { backgroundColor: layoutColor }]}>
                <ScrollView
                    contentContainerStyle={styles.contentContainerStyle}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    keyboardShouldPersistTaps='handled'
                >
                    <View style={styles.mainWrap}>
                        <Text style={[styles.appTitle, { color: titleColor }]}>{title}</Text>
                        <Text style={[styles.appDescription, { color: descriptionColor }]}>{description}</Text>

                        {showProfilePicOption ? <TouchableOpacity
                            style={styles.topWrap} onPress={() => {
                            }}>
                            <View style={styles.personImageWrap}>
                                <Image source={imageconstant.userIcon} />
                            </View>
                            {<Text style={styles.uploadProfilePic}>{uploadPhotoText}</Text>}
                        </TouchableOpacity> : null}


                        {showNameOption ? <View style={styles.formWrap}>
                            <InputField
                                placeholder={firstNamePlaceholder}
                                containerStyle={[styles.containerStyle, { width: screenWidth / 2 - 25, paddingRight: 0 }]}
                                activeOpacity={1}
                                titleText={firstNameTitle}
                                returnKeyType="next"
                            />
                            <InputField
                                containerStyle={[styles.containerStyle, { width: screenWidth / 2 - 25, marginLeft: 10, paddingRight: 0 }]}
                                placeholder={lastNamePlaceholder}
                                activeOpacity={1}
                                titleText={lastNameTitle}
                                returnKeyType="next"
                            />
                        </View> : null}
                        {showPhoneInput ? <CountryCodeAndPhoneInput
                            wrapperStyle={{ marginTop: 15, }}
                            titleText={phoneNumberTitle}
                            countryCode={countryCode}
                            placeholder={phoneNumberPlaceholder}
                        /> : null}
                        <InputField
                            placeholder={emailPlaceholder}
                            keyboardType={'email-address'}
                            activeOpacity={1}
                            titleText={emailTitle}
                            wrapperStyle={{ marginTop: 20, }}
                            containerStyle={styles.containerStyle}
                        />
                        <InputField
                            placeholder={passwordPlaceholder}
                            activeOpacity={1}
                            titleText={passwordTitle}
                            wrapperStyle={{ marginTop: 20, }}
                            containerStyle={styles.containerStyle}
                            secureTextEntry={true}
                        />
                        {showTermsAndCondition ?
                            <View style={styles.checkboxWrap}>
                                <Text style={styles.agreeTermText}>
                                    {'By checking this box, you agree to the' + " "}
                                    <Text style={styles.activeText} onPress={() => {
                                    }}>{'Terms of Service'}</Text>
                                    <Text>{' and '}</Text>
                                    <Text style={styles.activeText} onPress={() => {
                                    }}>{'Privacy Policy'}</Text>
                                </Text>
                            </View>
                            : null
                        }
                        <TouchableOpacity style={[styles.socialButton, {}]} onPress={onPressSignUp}>
                            <Text style={[styles.textStyle, { color: "white" }]}>{signUpBtnName}</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        withSocialLogin ?
                            <View style={{ marginTop: 40 }}>
                                <TouchableOpacity style={styles.socialButton} onPress={onPressGoogle}>
                                    <Text style={styles.textStyle}>{"Continue With Google"}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.socialButton} onPress={onPressFacebook}>
                                    <Text style={styles.textStyle}>{"Continue With Facebook"}</Text>
                                </TouchableOpacity>
                                {Platform.OS == "ios" ? <TouchableOpacity style={styles.socialButton}
                                    onPress={onPressApple}
                                >
                                    <Text style={styles.textStyle}>{"Continue With Apple"}</Text>
                                </TouchableOpacity> : null}
                            </View>
                            : null
                    }
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
        paddingTop: Platform.OS == "android" && StatusBar.currentHeight,
        width: screenWidth
    },
    contentContainerStyle: {
        flexGrow: 1,
        paddingBottom: 20
    },
    mainWrap: {
        paddingHorizontal: 20,
        paddingTop: 10,
        overflow: "hidden"
    },
    appTitle: {
        color: "#181818",
        fontSize: 22,
    },
    appDescription: {
        color: "#808080",
        fontSize: 14,
        paddingTop: 10
    },
    topWrap: {
        paddingVertical: 30,
        flexDirection: "row",
        alignItems: "center"
    },
    personImageWrap: {
        height: 95,
        width: 95,
        backgroundColor: "rgba(78, 143, 197, 0.3)",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    uploadProfilePic: {
        color: "#181818",
        fontSize: 14,
        paddingLeft: 25
    },
    formWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerStyle: {
        borderColor: Colors.blue,
        paddingHorizontal: 15,
    },
    checkboxWrap: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    agreeTermText: {
        color: Colors.black,
        fontSize: FontSize.ExtraSmallText,
        lineHeight: 16,
        flex: 1
    },
    activeText: {
        textDecorationLine: "underline",
        color: Colors.blue,
    },
    socialButton: {
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 20,
        backgroundColor: Colors.blue
    },
    textStyle: {
        fontSize: 14,
        color: Colors.black,
    },
})