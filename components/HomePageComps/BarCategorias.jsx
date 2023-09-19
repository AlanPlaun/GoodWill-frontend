import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const BarCategorias = (props) => {
    return (
                
            <View style={styles.categoria}>
                 <Image style={styles.foto} source={{uri: 'https://www.verte.tv/image/50931/electrodomesticos.jpg',}}/>
                <Text style={styles.texto}>{props.nombre}</Text>
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

export default BarCategorias
