import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Categorias = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                
            <View style={styles.categoria}>
                <Image style={styles.foto} source={require('../../assets/splash/Ellipse13.png')} />
                <Text style={styles.texto}>Plomeros</Text>
            </View>
            <View style={styles.categoria}>
                <Image style={styles.foto} source={require('../../assets/splash/Ellipse13.png')} />
                <Text style={styles.texto}>Plomeros</Text>
            </View>
            <View style={styles.categoria}>
                <Image style={styles.foto} source={require('../../assets/splash/Ellipse13.png')} />
                <Text style={styles.texto}>Plomeros</Text>
            </View>
            <View style={styles.categoria}>
                <Image style={styles.foto} source={require('../../assets/splash/Ellipse13.png')} />
                <Text style={styles.texto}>Plomeros</Text>
            </View>
            <View style={styles.categoria}>
                <Image style={styles.foto} source={require('../../assets/splash/Ellipse13.png')} />
                <Text style={styles.texto}>Plomeros</Text>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 118,
        flexDirection: 'row', // Agregado para colocar los elementos en fila
        marginRight:10
    },
    categoria: {
        marginLeft: 30, // Ajusta el espaciado entre las categorías si es necesario
    },
    foto: {
        borderColor: "black",
        width: 45,
        height: 46,
        left: 6
    },
    texto: {
        fontSize: 12,
    }
})

export default Categorias
