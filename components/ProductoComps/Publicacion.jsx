import React, { useState } from "react";
import {View,Text,StyleSheet,Button,Pressable, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export const Publicacion = () => { 
  const navigation = useNavigation();
  return (
    <View style={styles.Todo}>
      <Text style={styles.titulo}>Lol</Text> 
      <Image source={require('../../assets/splash/electricislo.jpg')} style={styles.image}/>
      {/* <Image style={styles.image} source={{uri: '{props.imagenPubli}',}}/> */}
      <Pressable style={styles.boton}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  Todo: {
    justifyContent: "center",
  },
  titulo:{
    marginTop:59,
    fontSize:24,
    marginLeft:23,
    fontWeight:'600'
  },
  image: {
    width: 285,
    height: 158,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 27,
    marginLeft: 9,
    alignSelf:"center"
},
boton:{
  width: 124,
height: 44,
borderRadius:4,
backgroundColor:"#CE5656",
alignSelf:"center",
marginTop:49
},
textoBoton:{
  fontSize:19,
  color:"white",
  fontWeight:"400",
  alignSelf:"center",
  marginTop:5
},
favcom:{
  flexDirection: 'row', // Agregado para colocar los elementos en fila
  alignSelf:"center",
  marginTop:30

},
favoritos:{
  flexDirection: 'row', // Agregado para colocar los elementos en fila
marginLeft:26
},
texFavcom:{
  fontSize:12,
  color:"#2F82FF"
}
});

export default Publicacion;
