import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Producto from './Producto';

const PublicacionSeccion = (props) => {
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    setTitulo(props.tipo === "Servicio" ? "Servicio" : "Producto");
  }, [props.tipo]);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{titulo}</Text>
      <Producto props={props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECECEC",
    height: 260,
    width: 410,
  },
  texto: {
    left: 14,
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default PublicacionSeccion;
