import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../redux/loginSlice'; 
import { setToken } from '../../redux/tokenSlice';
export const IngresoSesion = (props) => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const loggedIn = useSelector(state => state.login.loggedIn);
    const dispatch = useDispatch();

    const handleInputChangeEmail = (value) => {
        setEmail(value);
    };

    const handleInputChangeContraseña = (value) => {
        setContraseña(value);
    };
    
    async function subirDatos() {
        try {
          const response = await fetch('https://81eb-200-73-176-50.ngrok-free.app/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, contraseña: contraseña }),
          });
      
          if (response.ok) {
            const data = await response.json();
            //verificar
            console.log(data.successful);
            dispatch(setToken(data.successful));
            dispatch(login());
          } else {
            console.log('Request failed:', response.status);
          }
        } catch (error) {
          console.error(error);
        }
      }
    const navigation = useNavigation();

    return (
        <View style={styles.Todo}>
            <Text style={styles.Titulo}>Ingresa tus datos</Text>
            <TextInput style={styles.inputingreso} value={email} onChangeText={handleInputChangeEmail} placeholder="E-mail"   placeholderTextColor="gray" />
            <TextInput style={styles.inputcontra} value={contraseña} onChangeText={handleInputChangeContraseña} placeholder="Contraseña"   placeholderTextColor="gray" secureTextEntry={true}/> 
            <Text style={styles.olvidarContraseña}>Recuperar contraseña</Text>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "#924747" : "#CE5656" }, styles.Boton]} onPress={()=>{subirDatos, navigation.navigate('HomePage')}}>
                <Text style={styles.texto}>Siguiente</Text>
            </Pressable>
            <Text style={styles.crearCuenta}>¿No tenés una cuenta? Crear cuenta</Text>
            

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
         width: 350,
        height: 40,
        backgroundColor: "#D9D9D9",
        alignContent: "center",

        borderRadius: 5,
        padding: 10,
    },
    inputcontra:{
        marginTop:20,
         width: 350,
        height: 40,
        alignContent: "center",
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





export default IngresoSesion;