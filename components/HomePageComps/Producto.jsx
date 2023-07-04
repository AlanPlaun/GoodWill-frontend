import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Producto = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../../assets/splash/Ellipse13.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Peluquería</Text>
      <Text style={styles.subtitle}>Favor</Text>
      <Text style={styles.name}>Gonzalo Martínez</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 130,
    height: 197,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  title: {
    right:10,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  subtitle: {
    fontSize: "14",
    fontWeight: 'light',

    right:34,
    marginBottom: 25,
  },
  name: {
    fontWeight: 'light',

    fontSize: 12,
  },
});

export default Producto;
