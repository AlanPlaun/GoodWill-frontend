import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import CardProducto from './CardProducto';


const Servicios = () => {
  const [listaServicios, setListaServicios] = useState([])
    useEffect(() => {
<<<<<<< HEAD
        fetch(`http://10.152.2.134:5000/publicaciones/servicio`)
=======
        fetch(`http://10.152.2.135:5000/publicaciones/servicio`)
>>>>>>> 518f5baeb7bd170ff7a91013183d5622783261b5
        
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setListaServicios(data)
        });
    }, []);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        { listaServicios.map(servicios => (
      <View style={styles.card}>
        <CardProducto
        key = {servicios.idPublicacion}  nombre = {servicios.titulo}  creditos = {servicios.cantCredito}  descripcion = {servicios.descripcion}  ubicacion = {servicios.ubicacion}  idUsuario = {servicios.fkUsuario}  idCategoria = {servicios.fkCategoria} idPublicador = {productos}
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

export default Servicios;
