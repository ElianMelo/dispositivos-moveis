import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Figura = () => {
    const img = require('../../../../assets/iftm.jpg');    
    return (
        <View style={styles.view}>
            <Image
                style={styles.image}
                source={img}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 250,
    },
    view: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
});

export default Figura;