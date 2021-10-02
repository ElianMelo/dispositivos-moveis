import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LampDetail({navigation, route}, props) {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{route.params.detail}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        width: "97%",
        height: 160,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10
    },
    image: {
        resizeMode: "contain",
        width: 100,
        height: 100
    },
    text: {
        marginTop: 5
    }
});
