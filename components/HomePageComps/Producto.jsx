import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import CardProducto from "./CardProducto";

const Producto = (props) => {
  const [listaProductos, setListaProductos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://1b81-200-73-176-51.ngrok-free.app/publicacionesportipo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tipo: props.props.tipo }),
      });

      const data = await response.json();
      setListaProductos(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [props.props.tipo]) // Fetch data when the screen is focused or when the tipo prop changes
  );

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
      {listaProductos.map((producto) => (
        <View style={styles.card} key={producto.idPublicacion}>
          <CardProducto
            idPubli={producto.idPublicacion}
            nombre={producto.titulo}
            descripcion={producto.descripcion}
            ubicacion={producto.ubicacion}
            nombreUsuario={producto.nombreUsuario}
            imagenUsuario={producto.img}
            imagenPublicacion={producto.imagen}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: "row", // Agregado para colocar los elementos en fila
    marginLeft: 20,
  },
  card: {
    width: 130,
    height: 200,
    borderRadius: 8,
    marginHorizontal: 5,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Producto;
