import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const LampItem = (props) => {
    return (
        <TouchableOpacity
            onPress={() =>
                props.navigation.navigate('Detalhes', { detail: 'Esse é o detalhe do item' })
            }
        >
            <View style={styles.view}>
                <Image
                    style={styles.image}
                    source={props.img}
                />
                <Text style={styles.text}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    view: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        width: 160,
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

export default LampItem;
