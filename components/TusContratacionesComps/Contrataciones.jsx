import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { usePublicacion } from '../../context/PublicacionContext';

const TusContrataciones = () => {
  const { listaPublicacionesGuardadas } = usePublicacion([]);
  const [fechaFinalizado, setFechaFinalizado] = useState(null);

  const handleFinalizadoPress = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    setFechaFinalizado(formattedDate);
    console.log(formattedDate)
  };

  console.log(listaPublicacionesGuardadas);

  return (
    <View>
      {listaPublicacionesGuardadas &&
        listaPublicacionesGuardadas.map((item) => (
          <View style={styles.publicacion} key={item.idPublicacion}>
            <Image source={{ uri: item.imagenPublicacion }} style={styles.producto} />
            <Text style={styles.titulo}>{item.nombre}</Text>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "#924747" : "#CE5656" },
                styles.boton,
              ]}
              onPress={handleFinalizadoPress}>
              <Text style={styles.textoBoton}>Finalizado</Text>
            </Pressable>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  producto: {
    width: 130,
    height: 130,
    marginLeft: 20,
    marginTop: 10,
  },
  publicacion: {
    flexDirection: "row",
    height: 150,
    borderBottomColor: "rgba(0, 0, 0, 0.07)",
    borderBottomWidth: 1,
  },
  titulo: {
    fontWeight: "500",
    fontSize: 16,
    marginTop: 24,
    marginLeft: 10,
  },
  boton: {
    width: 124,
    height: 44,
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 49,
  },
  textoBoton: {
    fontSize: 19,
    color: "white",
    fontWeight: "400",
    alignSelf: "center",
    marginTop: 5,
  },
});

export default TusContrataciones;
