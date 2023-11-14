import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { InputContext } from "../../context/CrearPublicacionContext";
import { TokenContext } from '../../context/TokenContext';

export const PublicarProducto2 = () => {
  const navigation = useNavigation();
  const { inputValues } = useContext(InputContext);
  const {token} = React.useContext(TokenContext)
  const [text, onChangeText] = useState("");
  const [text2, onChangeText2] = useState("");
  const [Punts, onChangeText3] = useState(null)
  const holder = "Cantidad de puntos (recomendado: " + inputValues["Puntos"] + ")"
  const makeFetchRequest = async () => {
    if (!text || !text2) {
      alert("Por favor complete todos los campos")
      return;
    }

     // Construct payload using input values
     const payload = {
      titulo: text,
      descripcion: text2,
      categoria: inputValues["Categoria"],
      puntos: Punts
    };
    try {
      const response = await fetch(
        "https://a8db-186-19-157-106.ngrok-free.app/publicar",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "user_token": token  },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const data = await response.json();
        navigation.navigate("PantallaFinal", {id : data.idPublicacion});
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
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.inputingreso}
          onChangeText={onChangeText3}
          placeholder= {holder} 
          keyboardType="numeric"
          placeholderTextColor="gray"
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
