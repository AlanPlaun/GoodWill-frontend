import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Fragment, Pressable } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native';

// https://www.npmjs.com/package/react-native-dropdown-select-list

const PublicarProducto2 = () => {
    const [text, onChangeText] = useState('');
    const data = [
        { key: '1', value: 'Mobiles' },
        { key: '2', value: 'Cameras' },
        { key: '3', value: 'Computers' },
    ]
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
                <SelectList style={styles.desplegable} onChangeText={handleInputChangeTipo}
                    setTipo={(val) => setTipo(val)}
                    data={data}
                    save="value"
                />
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
    desplegable: {
        top: 100,
        width: 10,
        height: 30
    },
    container: {
        top: 30,
        backgroundColor: '#CE5656',
        padding: 5,
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
        top: 650,
    }

})
export { PublicarProducto2 }