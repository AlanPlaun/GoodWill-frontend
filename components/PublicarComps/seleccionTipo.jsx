import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Fragment, Pressable } from 'react-native';
import { InputContext } from '../../context/CrearPublicacionContext';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TokenContext } from '../../context/TokenContext';

export const SeleccionTipo = () => {
    const { token } = React.useContext(TokenContext)
    const navigation = useNavigation();
    const { updateInputValue } = useContext(InputContext);
    const [inputValue, setInputValue] = useState('');
    const handleNext = (selectedType) => {
        setInputValue(selectedType);
        updateInputValue('seleccionTipo', inputValue);
        navigation.navigate('PublicarProducto1');
    };

    if (token != null) {
        return (
            <View>
                <View style={styles.fondo}>
                    <Pressable onPress={() => { handleNext('Producto') }}>
                        <View style={styles.option} >
                            <View style={styles.circle}>
                                <FontAwesome5 style={styles.bolsa} name="shopping-bag" size={60} color="white" />
                            </View>
                            <Text style={styles.titulo}>Productos</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => {handleNext('Servicio') }}>
                        <View style={styles.option} >
                            <View style={styles.circle}>
                                <MaterialCommunityIcons style={styles.herramientas} name="tools" size={60} color="white" />
                            </View>
                            <Text style={styles.titulo}>Servicios</Text>
                        </View>
                    </Pressable>

                </View>
            </View>
        );
    }
    else {
        return (
            <View style={styles.sesion}>
                <Text style={styles.sesionTexto}>Para publicar tenes que tener una sesión iniciada</Text>
                <Pressable style={styles.sesionBoton} onPress={() => {
                    navigation.navigate("Sesion");
                }}>
                    <Text style={styles.sesionBotonTexto}>ir a Iniciar Sesión</Text>
                </Pressable>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    sesionBotonTexto: {
        textAlign: "center",
        fontWeight: "500"
    },
    sesionBoton: {
        backgroundColor: "#CE5656",
        width: 100,
        borderRadius: 4,
    },
    sesion: {
        alignItems: "center",
        marginTop: 20,
    },
    sesionTexto: {
        width: 250,
        textAlign: "center",
        fontSize: 18
    },
    bolsa: {
        bottom: 2
    },
    container: {
        top: 24,
        backgroundColor: '#CE5656',
        height: 56,
        width: 411,
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
        height: 30,
        fontWeight: '500',
        color: 'white',
        top: 12,
        left: 27,
        marginBottom: 32,
    },
    circle: {
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#CE5656',
        margin: 15,
        marginBottom: -1
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
export default SeleccionTipo 