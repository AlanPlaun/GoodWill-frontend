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
    //manda la informacion luego que se apreta el boton (deberia estar en una funcion que se llame cuando se toque el boton) 
    // fetch('http://localhost:5000/ingresosesion ', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type':'application/json',
    //     },
    //     body:JSON.stringify({email: email,contraseña: contraseña}),
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    // })
    // .catch(error => {
    //     console.error(error)
    // })
    


    return (
        <View style={{ backgroundColor: "#F5F5F5", alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.Titulo}>Ingresa tus datos</Text>
            <TextInput style={styles.inputingreso} value={email} onChangeText={handleInputChangeEmail} placeholder="E-mail"   placeholderTextColor="gray"/>
            <TextInput style={styles.inputcontra} value={contraseña} onChangeText={handleInputChangeContraseña} placeholder="Contraseña"   placeholderTextColor="gray" secureTextEntry={true}
/>
            
            <Text style={styles.olvidarContraseña}>Recuperar contraseña</Text>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "#924747" : "#CE5656" }, styles.Boton]} onPress={() => alert('Ingresando')}>
                <Text style={styles.texto}>Siguiente</Text>
            </Pressable>
            <Text style={styles.crearCuenta}>¿No tenés una cuenta? Crear cuenta</Text>

        </View>
    );
};

const styles = StyleSheet.create({
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
    Boton:{
        width: 260,
        height: 32,
        borderRadius: 5,
        marginTop: 24,
        
       

    }
    
});





export default IngresoSesion;