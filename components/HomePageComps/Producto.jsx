import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import CardProducto from './CardProducto';


const Producto = () => {
  const [listaProductos, setListaProductos] = useState([])
    useEffect(() => {
        fetch(`https://8af8-200-73-176-50.ngrok-free.app/publicaciones`)
        
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setListaProductos(data)
        });
    }, []);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        { listaProductos.map(productos => (
      <View style={styles.card}>
        <CardProducto
        key = {productos.idPublicacion}  nombre = {productos.titulo}  creditos = {productos.cantCredito}  descripcion = {productos.descripcion}  ubicacion = {productos.ubicacion}  idUsuario = {productos.fkUsuario}  idCategoria = {productos.fkCategoria} idPublicador = {productos}
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
