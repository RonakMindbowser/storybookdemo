import { useNavigation, useRoute } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../../src/theme/Colors';
import InputField from './InputField';

const Login = ({
    title,
    description,
    showForgotPassword,
    withSocialLogin,
    onPressSignIn,

    onPressGoogle,
    onPressFacebook,
    onPressApple,

    emailTitle,
    emailPlaceholder,

    passwordTitle,
    passwordPlaceholder,

    ...rest
}) => {
    const navigation = useNavigation();
    console.log("navigationL", navigation);
    const route = useRoute()
    console.log("Route:", route);
    console.log("Rest:", rest);

    return (
        <Fragment>
            <SafeAreaView style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.contentContainerStyle}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    keyboardShouldPersistTaps='handled'
                >
                    <View style={styles.mainWrap}>
                        <Text style={styles.appTitle}>{title}</Text>
                        <Text style={styles.appDescription}>{description}</Text>

                        <InputField
                            placeholder={emailPlaceholder}
                            keyboardType={'email-address'}
                            activeOpacity={1}
                            titleText={emailTitle}
                            wrapperStyle={{ marginTop: 40, }}
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

                        {showForgotPassword ?
                            <TouchableOpacity style={styles.forgotPasswordWrap} onPress={() => {
                                navigation.navigate("SignUp")
                            }}>
                                <Text style={styles.forgotPassword}>{'Forgot Password?'}</Text>
                            </TouchableOpacity>
                            : null
                        }

                        <TouchableOpacity style={[styles.socialButton, { backgroundColor: "blue", }]} onPress={() => {
                            navigation.navigate("SignUp")
                        }}>
                            <Text style={[styles.textStyle, { color: "white" }]}>{"Sign In"}</Text>
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

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS == "android" && StatusBar.currentHeight
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
    containerStyle: {
        borderColor: Colors.blue,
        paddingHorizontal: 15,
    },
    forgotPasswordWrap: {
        alignSelf: "flex-end",
        marginTop: 15,
        marginBottom: 20
    },
    forgotPassword: {
        color: 'black',
        fontSize: 12,
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
    },
    textStyle: {
        fontSize: 14,
        color: 'black',
    },
})