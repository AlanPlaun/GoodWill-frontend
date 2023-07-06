import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Producto = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardContain}>
          <Image source={require('../../assets/splash/pelo.jpg')} style={styles.image} />
          <Text style={styles.title}>Peluquería</Text>
          <Text style={styles.subtitle}>Favor</Text>
          <Text style={styles.name}>Gonzalo Martínez</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContain}>
          <Image source={require('../../assets/splash/pelo.jpg')} style={styles.image} />
          <Text style={styles.title}>Peluquería</Text>
          <Text style={styles.subtitle}>Favor</Text>
          <Text style={styles.name}>Gonzalo Martínez</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContain}>
          <Image source={require('../../assets/splash/pelo.jpg')} style={styles.image} />
          <Text style={styles.title}>Peluquería</Text>
          <Text style={styles.subtitle}>Favor</Text>
          <Text style={styles.name}>Gonzalo Martínez</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Agregado para colocar los elementos en fila

  },
  card: {
    width: 130,
    height: 200,
    borderRadius: 8,
    top: 7,
    backgroundColor: '#ffffff',
    right: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30, // Ajusta el espaciado entre las categorías si es necesario

  },
  cardContain: {
    left: 13,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 0,
    fontSize: 14
  },
  subtitle: {
    fontWeight: "400",
    color: "grey",
    marginBottom: 15,
    fontSize: 14
  },
  name: {
    fontWeight: 'light',
    fontSize: 12,
    width: 130,
    fontWeight: "400",
    color: "grey",


  },
});

export default Producto;
