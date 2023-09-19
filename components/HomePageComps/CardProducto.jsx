import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const CardProducto = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardContain}>
      <Pressable
        onPress={() => {
          navigation.navigate("Publicacion", {selectedPublicacion: props});
        }}
      >
        <Image source={require('../../assets/splash/pelo.jpg')} style={styles.image} />
      <Text style={styles.title}>{props.nombre}</Text>
      <Text style={styles.subtitle}>Favorashe</Text>
      <Text style={styles.name}>{props.nombre}</Text>
      </Pressable>
      
    </View>
  )
}



const styles = StyleSheet.create({
  cardContain: {
    left: 13,
  },
  image: {
    left: 1,
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
})
export default CardProducto;