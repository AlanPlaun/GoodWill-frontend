import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Pressable } from 'react-native';
import { usePublicacion } from '../../context/PublicacionContext';
import { useNavigation } from "@react-navigation/native";

const Confirmar = (props) => {
  const navigation = useNavigation();
  const {GuardarContratacion} = usePublicacion()
    const publicacionData = props.route.params.selectedPublicacion
  const fecha = props.route.params.selectedFecha
  function Presionar(){
    GuardarContratacion(publicacionData, fecha)
  }
  return (
    <View>
      <Text style={styles.titulo}>¿Está seguro que quiere contratar el servicio {publicacionData.nombre} para el dia de {fecha}?</Text>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#924747" : "#CE5656" },
          styles.boton,
        ]}
        onPress={() => {
          Presionar();
          navigation.navigate("Home")
        }}>
        <Text style={styles.textoBoton}>Contratar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  boton: {
    width: 124,
    height: 44,
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 49
  }, textoBoton: {
    fontSize: 19,
    color: "white",
    fontWeight: "400",
    alignSelf: "center",
    marginTop: 5
  },
  titulo: {
    fontWeight: "500",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10
  }
});

export default Confirmar;
