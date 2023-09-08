import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { InputContext } from "../../context/CrearPublicacionContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useToken } from "../../context/TokenContext";

export const PantallaFinal = () => {
  const { inputValues } = useContext(InputContext);
  const { tokenState } = useToken();
  console.log(tokenState);

  //imgur fetch request
  // Client ID
  //const clientId = "fd2e1e3d3d12ce1",
  //  auth = "Client-ID " + clientId;

  // Creating an object of formData
  //const formData = new FormData();

  // Adding our image to formData
  //formData.append("image", image);

  // Making the post request
  //await fetch("https://api.imgur.com/3/image/", {
  // API Endpoint
  //  method: "POST", // HTTP Method
  //  body: formData, // Data to be sent
  // headers: {
  // Setting header
  //    Authorization: auth,
  //    Accept: "application/json",
  //  },
  //})
  //  .then((res) => alert("image uploaded") && console.log(res)) // Handling success
  // .catch((err) => alert("Failed") && console.log(err)); // Handling error

  //HAY QUE SUBIR LAS COSAS EN PublicarProducto2 ASI SE CREA LA PUBLICACION. OBTENEMOS EL ID DE LA PUBLICACION Y LO MANDAMOS A PANTALLA FINAL, DONDE SUBIMOS LA IMAGEN A IMGUR Y PASAMOS EL LINK DE LA IMAGEN + LA ID AL BACK
  //Front se tiene que conectar con la API de imgur y hay que subir el link de la img al back
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
    <View>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#924747" : "#CE5656" },
        ]}
        onPress={() => {
          makeFetchRequest;
        }}
      ></Pressable>
      <Pressable
        style={styles.icono}
        onPress={() => {
          handlePickImage();
        }}
      >
        <MaterialCommunityIcons
          style={styles.uplImage}
          name="file-image-plus"
          size={120}
          color="black"
        />
        <Text style={styles.texto}>Elegi las fotos de tu producto</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#924747" : "#CE5656" },
          styles.Boton,
        ]}
        onPress={() => {
          makeFetchRequest();
        }}
      >
        <Text style={styles.textoBoton}>Siguiente</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  bolsa: {
    bottom: 2,
  },
  uplImage: {},
  texto: {
    opacity: 0.7,
    fontSize: 18,
  },
  icono: {
    alignItems: "center",
    marginTop: 126,
  },
  textoBoton: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    marginTop: 5,
  },
  Boton: {
    width: 350,
    height: 36,
    borderRadius: 5,
    top: 310,
    marginLeft: 30,
  },
});

export default PantallaFinal;
