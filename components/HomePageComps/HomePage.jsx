import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Busqueda from '../HomePageComps/Busqueda';
import Anuncio from './Anuncio';
import Categorias from './Categorías';
import Servicio from './Servicio.jsx';
import Productos from './Productos';
import Publicacion from '../ProductoComps/Publicacion';
import { useNavigation } from '@react-navigation/native';

export const HomePage = () => {
    const navigation = useNavigation();

    const handlePublicarPress = () => {
      navigation.navigate('PublicarStack');
    };
    return (
        <View style={styles.Todo}>
            <ScrollView>
                <Anuncio/>
                <Categorias/>
                <Servicio/>
                <Categorias/>
                <Productos/>
            </ScrollView> 
            <Publicacion/>
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