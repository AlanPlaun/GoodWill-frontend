import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { TokenContext } from "../../context/TokenContext";

const TusContrataciones = () => {
  const [listaPublicacionesGuardadas, setListaPublicacionesGuardadas] = useState(null);
  const { token } = React.useContext(TokenContext);

  const fetchPublicaciones = async () => {
    try {
      const response = await fetch("http://192.168.0.23:5000/contrataciones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          user_token: token,
        },
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const data = await response.json();
      setListaPublicacionesGuardadas(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching publicaciones:", error.message);
    }
  };

  useEffect(() => {
    fetchPublicaciones();
  }, []);

  const handleFinalizadoPress = async (item) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];

    try {
      // Primero, actualizamos el estado local
      setListaPublicacionesGuardadas((prevList) => {
        return prevList.filter((publicacion) => publicacion.idPublicacion !== item.idPublicacion);
      });

      // Luego, llamamos a la API para finalizar
      const response = await fetch("http://192.168.0.23:5000/finalizar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idContrataciones: item.idContrataciones,
          fechaFinalizado: formattedDate,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error handling finalizado:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {listaPublicacionesGuardadas &&
        listaPublicacionesGuardadas.map((item) => {
          if (item.fechaFin === null) {
            return (
              <View style={styles.publicacion} key={item.idPublicacion}>
                <Image source={{ uri: item.imagen }} style={styles.producto} />
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Pressable
                  style={({ pressed }) => [
                    { backgroundColor: pressed ? "#924747" : "#CE5656" },
                    styles.boton,
                  ]}
                  onPress={() => handleFinalizadoPress(item)}>
                  <Text style={styles.textoBoton}>Finalizado</Text>
                </Pressable>
              </View>
            );
          }
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  publicacion: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginVertical: 10,
    overflow: "hidden",
    elevation: 2,
  },
  producto: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titulo: {
    fontWeight: "500",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
  },
  boton: {
    width: "100%",
    height: 44,
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 10,
    justifyContent: "center",
  },
  textoBoton: {
    fontSize: 16,
    color: "white",
    fontWeight: "400",
    alignSelf: "center",
  },
});

export default TusContrataciones;
  