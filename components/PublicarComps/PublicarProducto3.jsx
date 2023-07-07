import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Fragment, Pressable } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native';

// https://www.npmjs.com/package/react-native-dropdown-select-list

const PublicarProducto2 = () => {
    const [text, onChangeText] = useState('');
    const [text2, onChangeText2] = useState('');
    const handleInputChangeTipo = (value) => {
        setTipo(value);
    };
    const navigation = useNavigation();

    return (
        <View >
            <View style={styles.container}>
                <Text style={styles.textHeader}>Ingrese datos</Text>
            </View>
            <View style={styles.fondo}>
                <Text style={styles.txtIngreso}>Ingresa los datos del producto</Text>
                <TextInput style={styles.input} onChangeText={onChangeText} placeholder="Marca"/>
                <TextInput style={styles.input} onChangeText={onChangeText2} placeholder="Marca"/>
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "#924747" : "#CE5656" }, styles.Boton]} onPress={() => { navigation.navigate('HomePage') }}>
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
    container: {
        top: 24,
        backgroundColor: '#CE5656',
        height: 56,
        width: 411,
    },
    fondo: {
        padding: 20,
        alignContent: "center",
        alignItems: "center",
        top: 30,
    },
    textHeader: {
        fontSize: 19,
        fontWeight: "500",
        color: "white",
        top: 12,
        left: 27,
        marginBottom: 32
    },
    txtIngreso: {
        fontWeight: "500",
        fontSize: 20,
        top: 5,
        marginBottom: 10,

    }, textoBoton: {
        color: "white",
        fontSize: 17,
        textAlign: "center",
        marginTop: 5,

    },
    Boton: {
        width: 350,
        height: 36,
        borderRadius: 5,
        top: 550,
        left: 30
    }
})
export { PublicarProducto2 }