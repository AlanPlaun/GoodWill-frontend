import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Fragment, Pressable, Image } from 'react-native';
import Producto from './Producto';

const Servicio = () =>{
    return(
    <View style={styles.container}>
        <Text style={styles.texto}>Servicios</Text>
        <Producto/>
    </View>)
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ECECEC",
        width:410
    },
    texto:{
        left: 14,
        fontSize:25
    }

})
export default Servicio