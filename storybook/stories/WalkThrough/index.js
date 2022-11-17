import React, { Fragment } from 'react';
import { Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export const screenHeight = Dimensions.get("window").height;

const WalkThrough = ({
    centerImage,
    title,
    description,
    buttonName,
}) => {
    return (
        <Fragment>
            <SafeAreaView style={[styles.container]}>
                <ScrollView
                    contentContainerStyle={styles.contentContainerStyle}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                >
                    <View style={styles.topImageWrap}>
                        <Image source={centerImage} />
                    </View>
                    <View style={styles.centerWrap}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                        <TouchableOpacity style={styles.buttonView}>
                            <Text style={styles.buttonName}>{buttonName}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
}

export default WalkThrough;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1F1F1",
        paddingTop: Platform.OS == "android" && StatusBar.currentHeight
    },
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: 'white'
    },
    topImageWrap: {
        height: screenHeight / 2,
        backgroundColor: "#F1F1F1",
        alignItems: "center",
        justifyContent: "center",
    },
    centerWrap: {
        alignSelf: "center",
        paddingVertical: 50,
        marginHorizontal: 30,
        paddingHorizontal: 25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        top: -25,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        textAlign: "center",
        color: "#0E0E0E",
        fontSize: 16,
    },
    description: {
        textAlign: "center",
        color: "#9C9C9C",
        fontSize: 12,
        paddingTop: 25,
        height: 80
    },
    buttonView: {
        marginHorizontal: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'blue',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: 113,
        marginTop: 40
    },
    buttonName: {
        fontSize: 12,
        color: 'white',
    }
})