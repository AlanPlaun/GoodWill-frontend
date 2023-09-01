import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';

const Producto = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
      <View style={styles.card}>
        <View style={styles.cardContain}>
          <Image source={require('../../assets/splash/pelo.jpg')} style={styles.image} />
          <Text style={styles.title}>Peluqueríashe</Text>
          <Text style={styles.subtitle}>Favorashe</Text>
          <Text style={styles.name}>Gonzalo Martínez</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContain}>
          <Image source={require('../../assets/splash/electricislo.jpg')} style={styles.image} />
          <Text style={styles.title}>Electricistashe</Text>
          <Text style={styles.subtitle}>Favorashe</Text>
          <Text style={styles.name}>Angel Labrunashe</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContain}>
              <Image source={require('../../assets/splash/plomerazo.jpg')} style={styles.image} />
          <Text style={styles.title}>Plomeríashe</Text>
          <Text style={styles.subtitle}>Favorashe</Text>
          <Text style={styles.name}>Gonzalo Martínez</Text>
        </View>
      </View>
      </ScrollView>
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
    left:1,
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
    fontWeight: 'light',
    color: "grey",
    marginBottom: 15,
    fontSize: 14
  },
  name: {
    fontWeight: 'light',
    fontSize: 12,
    width: 130,
    color: "grey",


  },
});

export default Producto;
