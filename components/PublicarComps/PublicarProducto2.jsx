import React, {useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InputContext } from '../../context/CrearPublicacionContext';
import { SelectList } from 'react-native-dropdown-select-list'

// https://www.npmjs.com/package/react-native-dropdown-select-list

const PublicarProducto2 = () => {
    const navigation = useNavigation();
    const { updateInputValue } = useContext(InputContext);
    const [inputValue, setInputValue] = useState('');

    const [text, onChangeText] = useState('');
    const [text2, onChangeText2] = useState('');
    const handleNext = () => {
        updateInputValue('titulo', text)
        updateInputValue('descripcion', text2)
        navigation.navigate('Agradecimiento')
    };  
    return (
        <View >
            <View style={styles.fondo}>
                <Text style={styles.titulo}>Ingresa los datos del producto</Text>
                <TextInput style={styles.inputingreso} onChangeText={onChangeText} placeholder="Título de la publicación" placeholderTextColor="gray"/>
                <TextInput style={styles.inputingreso} onChangeText={onChangeText2} placeholder="Descripción de la publicación"/>
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "#924747" : "#CE5656" }, styles.Boton]} onPress={() => { handleNext() }}>
                    <Text style={styles.textoBoton}>Siguiente</Text>
                </Pressable>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    
    fondo: {
        alignContent: "center",
        alignItems: "center",
        top: 30,
    },
    titulo: {
        fontWeight: "500",
        fontSize: 20,
        marginBottom: 10,
        right:22

    },textoBoton: {
        color: "white",
        fontSize: 17,
        textAlign: "center",
        marginTop: 5,

    },
    inputingreso:{
        marginBottom:20,
        width: 350,
        height: 40,
        alignContent: "center",
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        padding: 10,
    },
    Boton: {
        position:"absolute",
        width: 350,
        height: 36,
        borderRadius: 5,
        top: 550,
    }
})
export { PublicarProducto2 }