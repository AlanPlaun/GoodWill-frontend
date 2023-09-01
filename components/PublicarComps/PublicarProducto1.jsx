import React, {useContext, useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Fragment, Pressable } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native';
import { InputContext } from '../../context/CrearPublicacionContext';
import { set } from 'react-native-reanimated';
// https://www.npmjs.com/package/react-native-dropdown-select-list

export const PublicarProducto1 = () => {
const navigation = useNavigation();
const { updateInputValue } = useContext(InputContext);
const [inputValue, setInputValue] = useState('');
const [categorias, setCategorias] = useState([]);
const [data, setData] = useState([]);
useEffect(() => {
    fetch('https://81eb-200-73-176-50.ngrok-free.app/categoriasProducto' ,{
        method: 'POST',
    })
    .then(res => res.json())
    .then(res => {
        setCategorias(res);
        const mappedData = res.map(categoria => ({
            key: categoria.id,
            value: categoria.categoria
        }));
        setData(mappedData);
    })
    .catch(err => console.log(err));
}, []);
const handleNext = () => {
    updateInputValue('Categoria', inputValue);
    navigation.navigate('PublicarProducto2')
};

    return (
        <View>
            <View style={styles.ingresar}>
                <Text style={styles.titulo}>Ingresa los datos del producto</Text>
                <SelectList  setSelected={(val) => setInputValue(val)}  data={data} boxStyles={{backgroundColor:"#D9D9D9", borderWidth:0, width:350}} dropdownStyles={{backgroundColor:"#D9D9D9",  borderWidth:0, width:350}} save="value" placeholder="Seleccione categoria"/>
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "#924747" : "#CE5656" }, styles.Boton]} onPress={() => { handleNext() }}>
                    <Text style={styles.textoBoton}>Siguiente</Text>
                </Pressable>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    ingresar:{
        top: 30,
        alignItems: "center",

    },
    desplegable: {
        top: 110,
        width: 10,
        height: 30
        
    },
    container: {
        top: 24,
        backgroundColor: '#CE5656',
        height: 56,
        width: 411,
    },
    textHeader: {
        fontSize: 19,
        fontWeight: "500",
        color: "white",
        top: 12,
        left: 27,
        marginBottom: 32
    },
    titulo: {
        fontWeight: "500",
        fontSize: 20,
        marginBottom: 10,
        right:22
    }, textoBoton: {
        color: "white",
        fontSize: 17,
        textAlign: "center",
        marginTop: 5,

    },
    Boton: {
        position:"absolute",
        width: 350,
        height: 36,
        borderRadius: 5,
        top: 550,
    }

})
export default PublicarProducto1 