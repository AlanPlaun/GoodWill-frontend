
import React, { useContext, useState } from "react";
import { View, Text, StyleSheet,  Button, Pressable, TouchableOpacity } from "react-native";
import { InputContext } from "../../context/CrearPublicacionContext";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker' 
import { useToken } from '../../context/TokenContext';
export const PantallaFinal = () => {
  const { inputValues } = useContext(InputContext);
  const { tokenState} = useToken();
  const makeFetchRequest = async () => {
    try {
      // Construct payload using input values
      const payload = {
        value1: inputValues["Categoria"],
        value2: inputValues["titulo"],
        value3: inputValues["descripcion"],
        value4: tokenState.value,
      };

      // Make fetch request with payload
      const response = await fetch("https://bcb0-200-73-176-50.ngrok-free.app/publicar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Handle response
      if (response.ok) {
        // Fetch request success
      } else {
        // Fetch request failed
      }
    } catch (error) {
      console.error("Failed to make fetch request:", error);
    }
  };

  const [image, setImage] = useState(null);

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

      

  return (
    //ingresar imagen
    <View>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#924747" : "#CE5656" },
        ]}
        onPress={() => {
          makeFetchRequest;
        }}
      >

      </Pressable>
      <Pressable style={styles.icono} onPress={{handlePickImage}}>
        <MaterialCommunityIcons style={styles.uplImage} name="file-image-plus" size={120} color="black" />
        <Text style={styles.texto}>Elegi las fotos de tu producto</Text>
        </Pressable>
        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "#924747" : "#CE5656" }, styles.Boton]} onPress={() => { handleNext() }}>
                    <Text style={styles.textoBoton}>Siguiente</Text>
                </Pressable>

        </View>
  );
};
const styles = StyleSheet.create({
  bolsa:{
      bottom:2
  },
  uplImage:{
  },
  texto:{
    opacity: 0.7,
    fontSize: 18
  },
  icono:{
    alignItems:"center",
    marginTop:126
  },
    textoBoton: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    marginTop: 5,

}, Boton: {
  width: 350,
  height: 36,
  borderRadius: 5,
  top:310,
  marginLeft:30
}
})

export default PantallaFinal ;
