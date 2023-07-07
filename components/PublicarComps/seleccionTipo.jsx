import React, { useContext,useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Fragment, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InputContext } from '../../context/CrearPublicacionContext';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



//un dropdown(lo puso chatgpt :v) https://www.npmjs.com/package/react-native-dropdown-select-list

const SeleccionTipo = ({navigation}) => {
    const { updateInputValue } = useContext(InputContext);
  const [inputValue, setInputValue] = useState('');

  const handleNext = () => {
    updateInputValue('seleccionTipo', inputValue);
    navigation.navigate('PublicarProducto1')
  };

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.textHeader}>¿Qué quieres publicar hoy?</Text>
            </View>
            <View style={styles.fondo}>
                <Pressable onPress={() => {setInputValue('Producto'),handleNext()}}>
                    <View style={styles.option} >
                        <View style={styles.circle}>        
                        <FontAwesome5 style={styles.bolsa} name="shopping-bag" size={60} color="white" />
                            </View>
                        <Text style={styles.titulo}>Productos</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => {setInputValue('Producto'),handleNext()}}>
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
};

const styles = StyleSheet.create({
    bolsa:{
        bottom:2
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
        height:30    ,
        fontWeight: '500',
        color: 'white',
        top: 12,
        left: 27,
        marginBottom: 32,
    },
    circle: {
        width: 100,
        justifyContent:"center",
        alignItems:"center",
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#CE5656',
        margin: 15,
        marginBottom:-1
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