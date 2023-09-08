import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { InputContext } from "../../context/CrearPublicacionContext";
import { useToken } from "../../context/TokenContext";

// https://www.npmjs.com/package/react-native-dropdown-select-list

export const PublicarProducto2 = () => {
  const navigation = useNavigation();
  const { inputValues } = useContext(InputContext);
  const { tokenState } = useToken();
  const [text, onChangeText] = useState("");
  const [text2, onChangeText2] = useState("");
  const makeFetchRequest = async () => {
    try {
      // Construct payload using input values
      const payload = {
        user_token: tokenState.value.successful,
        titulo: inputValues["titulo"],
        descripcion: text2,
        categoria: text,
      };
      console.log(payload);
      // Make fetch request with payload
      const response = await fetch(
        "https://a6b1-200-73-176-50.ngrok-free.app/publicar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      // Handle response
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigation.navigate('pantallafinal')

      } else {
        console.log("Request failed:", response.status);
      }
    } catch (error) {
      console.error("Failed to make fetch request:", error);
    }
  };

  return (
    <View>
      <View style={styles.fondo}>
        <Text style={styles.titulo}>Ingresa los datos del producto</Text>
        <TextInput
          style={styles.inputingreso}
          onChangeText={onChangeText}
          placeholder="Título de la publicación"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.inputingreso}
          onChangeText={onChangeText2}
          placeholder="Descripción de la publicación"
        />
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#924747" : "#CE5656" },
            styles.Boton,
          ]}
          onPress={() => {
            makeFetchRequest
          }}
        >
          <Text style={styles.textoBoton}>Siguiente</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  fondo: {
    alignContent: "center",
    alignItems: "center",
    top: 30,
  },
  titulo: {
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 10,
    right: 22,
  },
  textoBoton: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    marginTop: 5,
  },
  inputingreso: {
    marginBottom: 20,
    width: 350,
    height: 40,
    alignContent: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    padding: 10,
  },
  Boton: {
    position: "absolute",
    width: 350,
    height: 36,
    borderRadius: 5,
    top: 550,
  },
});
export default PublicarProducto2;
