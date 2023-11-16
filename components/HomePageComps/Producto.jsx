import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import CardProducto from "./CardProducto";

const Producto = (props) => {
// const Producto = () => {
  const [listaProductos, setListaProductos] = useState([]);
  //ROMPI TODOOOOOOOOOO ASHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
  // useEffect(() => {
  //   fetch(`https://9e2c-200-73-176-51.ngrok-free.app/publicaciones`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     setListaProductos(data)
  //   });
  // }, []);
  useEffect(() => {
    fetch("https://0f56-186-19-157-106.ngrok-free.app/publicacionesportipo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tipo: props.props.tipo }),
    })
      .then((res) => res.json())
      .then((res) => {
        setListaProductos(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {listaProductos.map((productos) => (
          <View style={styles.card} key={productos.idPublicacion}>
            <CardProducto
              idPubli={productos.idPublicacion}
              nombre={productos.titulo}
              descripcion={productos.descripcion}
              ubicacion={productos.ubicacion}
              nombreUsuario={productos.nombreUsuario}
              imagenUsuario={productos.img}
              imagenPublicacion={productos.imagen}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Agregado para colocar los elementos en fila
  },
  card: {
    width: 130,
    height: 200,
    borderRadius: 8,
    top: 7,
    backgroundColor: "#ffffff",
    right: 15,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30, // Ajusta el espaciado entre las categorías si es necesario
  },
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
    fontWeight: "bold",
    marginBottom: 0,
    fontSize: 14,
  },
  subtitle: {
    fontWeight: "light",
    color: "grey",
    marginBottom: 15,
    fontSize: 14,
  },
  name: {
    fontWeight: "light",
    fontSize: 12,
    width: 130,
    color: "grey",
  },
});

export default Producto;
