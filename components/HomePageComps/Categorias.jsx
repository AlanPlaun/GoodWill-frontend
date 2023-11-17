import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import BarCategorias from "./BarCategorias";

const Categorias = (props) => {
  const [listaCategorias, setListaCategorias] = useState([]);

  useEffect(() => {
    fetch("https://1b81-200-73-176-51.ngrok-free.app/categoriasportipo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tipo: props.tipo }),
    })
      .then((res) => res.json())
      .then((res) => {
        setListaCategorias(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {listaCategorias.map((categorias) => (
          <BarCategorias
            key={categorias.idCategoria}
            nombre={categorias.categoria}
            fkPublicacion={categorias.fkTipoPublicacion}
            foto={categorias.imagen}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    marginTop: 10,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
});

export default Categorias;
