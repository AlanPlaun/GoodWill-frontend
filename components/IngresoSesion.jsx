import React, { useState } from 'react';
import { View, Text,StyleSheet,TextInput,Button, Pressable } from 'react-native';

export const IngresoSesion = () => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleInputChangeEmail = (value) => {
        setEmail(value);
    };

    const handleInputChangeContraseña = (value) => {
        setContraseña(value);
    };

    return (
        <View style={{ backgroundColor: "#F5F5F5", alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.Titulo}>Ingresa tus datos</Text>
            <TextInput style={styles.inputemail} value={email} onChangeText={handleInputChangeEmail} />
            {email.length === 0 && (
                <Text style={styles.placeholderemail}>Email</Text>
            )}
            <TextInput style={styles.inputContraseña} value={contraseña} onChangeText={handleInputChangeContraseña} />
            {contraseña.length === 0 && (
                <Text style={styles.placeholdercon}>Contraseña</Text>
            )}
            <Text style={styles.olvidarContraseña}>Recuperar contraseña</Text>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "#924747" : "#CE5656" }, styles.Boton]} onPress={() => alert('Ingresando')}>
                <Text style={styles.texto}>Siguiente</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    Titulo:{
        position: "absolute",
        width: 168,
        height: 24,
        left: 30,
        top: 54,
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 20,
        lineHeight: 24,
        textAlign: "center",
        color: "#000000",
    },
    inputemail:{
        position: "absolute",
        width: 300,
        height: 40,
        left: 30,
        top: 92,
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        padding: 10,
    },
    inputContraseña:{
        position: "absolute",
        width: 300,
        height: 40,
        left: 30,
        top: 152,
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
    },
    placeholderemail:{
        position: "absolute",
        width: 51,
        height: 21,
        left: 38,
        top: 102,
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 17,
        lineHeight: 21,
        color: "#999999",
    },
    placeholdercon:{
        position: "absolute",
        width: 93,
        height: 21,
        left: 39,
        top: 163,
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 17,
        lineHeight: 21,
        color: "#999999",
    },
    olvidarContraseña:{
        position: "absolute",
        width: 115,
        height: 13,
        left: 30,
        top: 192,
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 11,
        lineHeight: 13,
        textAlign: "center",
        textDecorationLine: "underline",
        color: "#C2C2C2",
    },
    Boton:{
        width: 260,
        height: 32,
        borderRadius: 5,
        paddingLeft: 50,
        paddingTop: 229
    },
    texto:{
        color: "white",
        fontSize:17,
        justifyContent: 'center',
        alignItems: 'center',
        

    }
});





export default IngresoSesion;