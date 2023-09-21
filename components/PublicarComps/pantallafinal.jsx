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
import { getApps, initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyBzT0aMq4_maVs0s954WMg-spGqwMZ-8R0",
  authDomain: "goodwill-ort.firebaseapp.com",
  projectId: "goodwill-ort",
  storageBucket: "goodwill-ort.appspot.com",
  messagingSenderId: "348820315175",
  appId: "1:348820315175:web:1058bcc8cac1bc9bea4202",
  measurementId: "G-ZX6NWZEWVQ"
};

if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
}

export const PantallaFinal = () => {
  const navigation = useNavigation();
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState(null);

  const handlePickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true
    });

    console.log({ pickerResult });

    handleImagePicked(pickerResult);
  };

  const handleImagePicked = async (pickerResult) => {
    try {
      setUploading(true);

      if (!pickerResult.canceled) {
        const uploadUrl = await uploadImageAsync(pickerResult.uri);
        setImage(uploadUrl);
      }
    } catch (e) {
      console.log(e);
      alert("Upload failed, sorry :(");
    } finally {
      setUploading(false);
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
  
    const fileRef = ref(getStorage(), uuidv4()); // Use uuidv4() to generate a UUID
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
        onChange={() => {}}
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
          navigation.navigate("HomePage");
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
