import { DrawerToggleButton } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Fragment, Pressable } from 'react-native';
import 'react-native-gesture-handler';

const Busqueda = () => {
    const [busqueda, setBusqueda] = useState('');

    const handleInputChangeBusqueda = (value) => {
        setBusqueda(value);
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
            <DrawerToggleButton></DrawerToggleButton>
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
    }
});

export default Busqueda;
