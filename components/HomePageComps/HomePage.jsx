import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import Busqueda from '../HomePageComps/Busqueda'
import Anuncio  from './Anuncio';
import Categorias from './Categorías'
import Productos from './Producto';
export const HomePage = () => {
   


    return (
        <View style={styles.Todo}>
            {/* <Text style={styles.Titulo}>Ingresa tus datos</Text> */}
            <Busqueda/>
            <Anuncio/>
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