import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Busqueda from '../HomePageComps/Busqueda';
import Anuncio from './Anuncio';
import Categorias from './Categorias';
import Servicio from './Servicio.jsx';
import Productos from './Productos';
import Publicacion from '../ProductoComps/Publicacion';
import { useNavigation } from '@react-navigation/native';

export const HomePage = () => {
    const navigation = useNavigation();
    const handlePublicarPress = () => {
        navigation.navigate('PublicarStack');
    };
    //hacer que se recarge la pantalla si se crea un nuevo servicio o producto
    return (
        <View style={styles.Todo}>
            <ScrollView>
                <Anuncio/>
                <Categorias tipo= "Servicio" />
                <Servicio/>
                <Categorias tipo= "Producto" />
                <Productos/>
            </ScrollView> 
        </View>
    );
};

const styles = StyleSheet.create({
    Todo: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white"
    },
});

export default HomePage;