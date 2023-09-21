import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { InputContext } from "../../context/CrearPublicacionContext";
import { useToken } from "../../context/TokenContext";

export const PublicarProducto2 = () => {
  const navigation = useNavigation();
  const { inputValues } = useContext(InputContext);
  const { tokenState } = useToken();
  const [text, onChangeText] = useState("");
  const [text2, onChangeText2] = useState("");
  const makeFetchRequest = async () => {
    // Construct payload using input values
    const payload = {
      titulo: text,
      descripcion: text2,
      categoria: inputValues["Categoria"],
    };
    try {
      const response = await fetch(
        "http://192.168.0.166:5000/publicar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "user_token": tokenState.value.successful
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigation.navigate("PantallaFinal");
      } else {
        console.log("Request failed:", response.status);
      }
    } catch (error) {
      console.error(error);
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
            makeFetchRequest()
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
