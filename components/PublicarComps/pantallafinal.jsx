import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { uploadBytes, getDownloadURL } from "firebase/storage";

export const PantallaFinal = () => {
  const navigation = useNavigation();

  const handlePickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })

    console.log({pickerResult});

    this.handleImagePicked(pickerResult);
  };

  _handleImagePicked = async (pickerResult) => {
    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        const uploadUrl = await uploadImageAsync(pickerResult.uri);
        this.setState({ image: uploadUrl });
      }
    } catch (e) {
      console.log(e);
      alert("Upload failed, sorry :(");
    } finally {
      this.setState({ uploading: false });
    }
  };

  async function uploadImageAsync(uri) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  
    const fileRef = ref(getStorage(), uuid.v4());
    const result = await uploadBytes(fileRef, blob);
  
    blob.close();
  
    return await getDownloadURL(fileRef); //subir esto a la base de datos
  }

  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#924747" : "#CE5656" },
        ]}
      ></Pressable>
      <Pressable
        style={styles.icono}
        onPress={() => {
          handlePickImage();
        }}
        onChange={()=>{}}
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
          //deberia llevar a la pantalla de agradecimiento :v
          navigation.navigate('HomePage')
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
