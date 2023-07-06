import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import Busqueda from '../HomePageComps/Busqueda'
import Anuncio  from './Anuncio';
import Categorias from './Categorías'
import Servicio from './Servicio.jsx';
import Productos from './Productos';
export const HomePage = () => {
   


    return (
        <View style={styles.Todo}>
            {/* <Text style={styles.Titulo}>Ingresa tus datos</Text> */}
            <Busqueda/>
            <Anuncio/>
            <Categorias/>
            <Servicio/>
            <Categorias/>
            <Productos/>
        </View>
    );
};

const styles = StyleSheet.create({
    Todo:{
         alignItems: 'center', justifyContent: 'center' ,
         backgroundColor: "white"
    },
   
});





export default HomePage;