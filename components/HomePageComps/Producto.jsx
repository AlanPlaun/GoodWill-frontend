import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import CardProducto from './CardProducto';


const Producto = () => {
  const [listaProductos, setListaProductos] = useState([])
    useEffect(() => {
        fetch(`http://10.152.2.134:5000/publicaciones`)
        
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setListaProductos(data)
          console.log(listaProductos.idPublicacion)
        });
    }, []);
    return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        { listaProductos.map(productos => (
        <View style={styles.card} key={productos.idPublicacion}>
        <CardProducto
          nombre = {productos.titulo}  descripcion = {productos.descripcion}  ubicacion = {productos.ubicacion}  nombreUsuario= {productos.nombreUsuario}  imagenUsuario={productos.img} imagenPublicacion={productos.imagen}
        /> 
      </View>
      
 ))
        } 
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
