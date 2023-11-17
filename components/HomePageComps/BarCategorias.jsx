import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BarCategorias = (props) => {
  return (
    <TouchableOpacity style={styles.categoria} onPress={() => console.log('Category pressed')}>
      <Image style={styles.foto} source={{ uri: props.foto }} />
      <Text style={styles.texto}>{props.nombre}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoria: {
    alignItems: 'center',
    marginLeft: 15,
    paddingVertical: 10,
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  texto: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default BarCategorias;