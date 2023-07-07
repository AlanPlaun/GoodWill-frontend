import React, {useContext, useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Fragment, Pressable } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native';
import { InputContext } from '../../context/CrearPublicacionContext';
// https://www.npmjs.com/package/react-native-dropdown-select-list

const PublicarProducto1 = () => {
  const navigation = useNavigation();
  const { updateInputValue } = useContext(InputContext);
  const [inputValue, setInputValue] = useState('');

  const [categorias, setCategorias] = useState([]);
  console.log(categorias);
  
  const handleNext = () => {
    updateInputValue('Categoria', inputValue);
    navigation.navigate('PublicarProducto3')
  
  };
  useEffect(() => {
    fetch('https://8cec-200-73-176-50.ngrok-free.app/categoriasProducto' ,{
      method: 'POST',
    })
    .then(res => res.json())
    .then(res => {
      setCategorias(res.data);
    })
    .catch(err => console.log(err));
    
  }, []);

  const data = [
      {key: '1', value:'tecnologia'},
      {key:'2', value:'mueble'},
  ]

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.textHeader}>Ingrese datos</Text>
            </View>
            <View style={styles.fondo}>
                <Text style={styles.txtIngreso}>Ingresa los datos del producto</Text>
                <SelectList  setSelected={(val) => setInputValue(val)}  data={data} save="value" placeholder="Seleccione categoria"/>
                <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "#924747" : "#CE5656" }, styles.Boton]} onPress={() => { handleNext() }}>
                    <Text style={styles.textoBoton}>Siguiente</Text>
                </Pressable>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
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
        left: 27,
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
        top: 550,
        left: 30
    }

})
export { PublicarProducto1 }