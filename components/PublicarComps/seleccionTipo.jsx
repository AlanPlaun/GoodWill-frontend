import React, { useContext,useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Fragment, Pressable } from 'react-native';
import { InputContext } from '../../context/CrearPublicacionContext';
import { useNavigation } from '@react-navigation/native';

//un dropdown(lo puso chatgpt :v) https://www.npmjs.com/package/react-native-dropdown-select-list

const SeleccionTipo = () => {
    const navigation = useNavigation();
    const { updateInputValue } = useContext(InputContext);
  const [inputValue, setInputValue] = useState('');

  const handleNext = () => {
    updateInputValue('seleccionTipo', inputValue);
    navigation.navigate('PublicarProducto1')
  };
 //no funciona el setinputvalue                 
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.textHeader}>¿Qué quieres publicar hoy?</Text>
            </View>
            <View style={styles.fondo}>
                <Pressable onPress={() => {setInputValue('Producto'),handleNext()}}>
                    <View style={styles.option} >
                        <View style={styles.circle}></View>
                        <Text style={styles.titulo}>jose</Text>
                    </View>
                </Pressable>
                <View style={styles.option}>
                    <View style={styles.circle}></View>
                    <Text style={styles.titulo}>rodrigo</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 30,
        backgroundColor: '#CE5656',
        padding: 5,
    },
    fondo: {
        top: 250,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        flexDirection: 'row',
    },
    textHeader: {
        fontSize: 19,
        fontWeight: '500',
        color: 'white',
        top: 12,
        left: 27,
        marginBottom: 32,
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#CE5656',
        margin: 15,
    },
    option: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 19,
        fontWeight: '500',
        color: 'black',
        marginBottom: 32,
    },
});
export { SeleccionTipo }