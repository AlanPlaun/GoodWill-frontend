import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import Busqueda from '../HomePageComps/Busqueda'
import Anuncio  from './Anuncio';
export const HomePage = () => {
   


    return (
        <View style={styles.Todo}>
            {/* <Text style={styles.Titulo}>Ingresa tus datos</Text> */}
                <Busqueda/>
            <Anuncio/>
        </View>
    );
};

const styles = StyleSheet.create({
    Todo:{
         alignItems: 'center', justifyContent: 'center' 
    },
    crearCuenta:{
        marginTop:14,
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 11,
        lineHeight: 13,
        textDecorationLine: "underline",
        color: "#C2C2C2",
    },
    Titulo:{
        marginTop:54,
        marginRight:141,
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 24,
        textAlign: "center",
        color: "#000000",
        
    },
    inputingreso:{
        marginTop:14,
         width: 300,
        height: 40,
        right: 10,
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        padding: 10,
    },
    inputcontra:{
        marginTop:20,
         width: 300,
        height: 40,
        right: 10,
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        padding: 10,
    },
    
 
    placeholdercon:{
       
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 17,
        lineHeight: 21,
        color: "#999999",
    },
    olvidarContraseña:{
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 11,
        marginRight:190,
        lineHeight: 13,
        textDecorationLine: "underline",
        color: "#C2C2C2",
    },
    texto:{
        color: "white",
        fontSize:17,
        textAlign:"center",
        marginTop:3,
        
    },
    Boton: {
        width: 260,
        height: 32,
        borderRadius: 5,
        marginTop: 24,
        
       

    }

});





export default HomePage;