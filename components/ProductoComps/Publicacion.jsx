import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

export const Publicacion = (props) => {
 
  const navigation = useNavigation();
  const publicacionData = props.route.params.selectedPublicacion;
  // console.log(publicacionData);

  return (
    <View style={styles.Todo} >
      <ScrollView>
        <Text style={styles.titulo}>{publicacionData.nombre}</Text>

        <Image source={{uri : publicacionData.imagenPublicacion}} style={styles.image} />
        <Pressable style={styles.boton}onPress={() => {
          navigation.navigate("Contratar", {selectedPublicacion: publicacionData});
        }}
        >
          <Text style={styles.textoBoton}>Contratar</Text>
        </Pressable>
        <View style={styles.favcom}>
          <View style={styles.favoritos}>
            <MaterialCommunityIcons style={styles.herramientas} name="cards-heart-outline" size={30} color="#2F82FF" />
            <Text style={styles.texFavcom}>Agregar a Favoritos</Text>
          </View>
          <View style={styles.favoritos}>
            <MaterialCommunityIcons style={styles.herramientas} name="share-variant-outline" size={30} color="#2F82FF" />
            <Text style={styles.texFavcom}>Agregar a Favoritos</Text>
          </View>
        </View>
        <View style={styles.linea}></View>
        <View style={styles.descripcion}>
          <Text style={styles.titulos}>Descripcion</Text>
          <Text style>{publicacionData.descripcion}</Text>
        </View>
        <View style={styles.linea}></View>
        <View style={styles.ubicacion}>
          <Text style={styles.titulos}>Ubicacion</Text>
          <Text>Zona: {publicacionData.ubicacion}</Text>
        </View>
        <View style={styles.linea}></View>
        <View style={styles.infoPerfil}>
          <Text style={styles.titulos}>Información del proveedor</Text>
          <View style={styles.perfil}>
            <Image source={{uri: publicacionData.imagenUsuario}} style={styles.imagenPerfil} />
            <Text>{publicacionData.nombreUsuario}</Text>
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Todo: {
    justifyContent: "center",
  },
  titulo: {
    marginTop: 59,
    fontSize: 24,
    marginLeft: 23,
    fontWeight: '600'
  },
  image: {
    width: 285,
    height: 158,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 27,
    marginLeft: 9,
    alignSelf: "center"
  },
  boton: {
    width: 124,
    height: 44,
    borderRadius: 4,
    backgroundColor: "#CE5656",
    alignSelf: "center",
    marginTop: 49
  },
  textoBoton: {
    fontSize: 19,
    color: "white",
    fontWeight: "400",
    alignSelf: "center",
    marginTop: 5
  },
  favcom: {
    flexDirection: 'row', // Agregado para colocar los elementos en fila
    alignSelf: "center",
    marginTop: 30,
  },
  favoritos: {
    flexDirection: 'row', // Agregado para colocar los elementos en fila
    marginLeft: 26
  },
  texFavcom: {
    fontSize: 12,
    color: "#2F82FF"
  },
  linea: {
    marginBottom: 20,
    marginTop: 20,
    width: 390,
    borderColor: 'rgba(0, 0, 0, 0.07)',
    borderWidth: 1,
    alignSelf: "center"
  },
  descripcion: {
    marginLeft: 21
  },
  titulos: {
    fontSize: 19,
    fontWeight: "500"
  },
  ubicacion: {
    marginLeft: 21
  },
  infoPerfil: {

    marginLeft: 21
  },
  imagenPerfil: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  perfil: {
    flexDirection: 'row', // Agregado para colocar los elementos en fila
  }
});

export default Publicacion;
