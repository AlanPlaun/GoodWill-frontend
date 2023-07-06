import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const Anuncio = () => {

    return (
        <View style={styles.container}>
            <Image style= {styles.foto} source={require('../../assets/splash/electricistas.png')} />

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        top: 24,
        backgroundColor: '#ffffff',
        height: 206,
        width: 411,
        marginBottom:50,
    },
    foto:{
        top: 12.5,
        width:327,
        height:182,
        position: "absolute",
        left: 50,
    }
});

export default Anuncio