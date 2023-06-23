import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Fragment, Pressable } from 'react-native';

const Busqueda = () => {
    const [busqueda, setBusqueda] = useState('');
    const [showMenu, setShowMenu] = useState(false);

    const handleInputChangeBusqueda = (value) => {
        setBusqueda(value);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <View style={styles.container}>
            <View style={styles.srcBar}>
            <TextInput
                style={styles.inputBusqueda}
                value={busqueda}
                onChangeText={handleInputChangeBusqueda}
                placeholder="Busqueda"
                
                placeholderTextColor="gray"

            />                

            <TouchableOpacity onPress={toggleMenu}>
                <Text style={styles.menuIcon}>≡</Text>
            </TouchableOpacity>
             {showMenu ? (
                <View style={styles.menuContainer}>
                    <Text>Opción 1</Text>
                    <Text>Opción 2</Text>
                    <Text>Opción 3</Text>
                </View>
            ) : null} 

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    srcBar:{
        bottom:37
    },
    container: {
        top: 24,
        backgroundColor: '#CE5656',
        height: 56,
        width: 411,
    },
    inputBusqueda: {
        marginTop: 20,
        width: 231,
        height: 40,
        borderRadius: 5,
        padding: 10,
        top: 25.49,
        bottom: 27.45,
        backgroundColor: '#FFFFFF',
        borderRadius: 35,
        alignSelf: 'center',
    },
    menuIcon: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
        bottom:23,

    },
    menuContainer: {
        backgroundColor: '#FFFFFF',
        
    },
});

export default Busqueda;
