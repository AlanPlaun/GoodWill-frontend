// FinalScreen.js
import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { InputContext } from "../../context/CrearPublicacionContext";

const PantallaFinal = () => {
  const { inputValues } = useContext(InputContext);

  const makeFetchRequest = async () => {
    try {
      // Construct payload using input values
      const payload = {
        value1: inputValues["Categoria"],
        value2: inputValues["titulo"],
        value3: inputValues["descripcion"],
        value4: 1 //idUsuario 
        //CAMBIAR EN EL RESTO DEL CODIGO (SACAMOS 3 VALUES, marca, tipo, condicion)
      };

      // Make fetch request with payload
      const response = await fetch("https://b4ba-200-73-176-50.ngrok-free.app/publicar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Handle response
      if (response.ok) {
        // Fetch request success
      } else {
        // Fetch request failed
      }
    } catch (error) {
      console.error("Failed to make fetch request:", error);
    }
  };

  return (
    <View>
      <Text>Final Screen</Text>
      {/* Display input values or other content */}
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#924747" : "#CE5656" },
          styles.Boton,
        ]}
        onPress={() => {
          makeFetchRequest;
        }}
      >
        <Text style={styles.textoBoton}>llamar al back</Text>
      </Pressable>
    </View>
  );
};

export { PantallaFinal };
