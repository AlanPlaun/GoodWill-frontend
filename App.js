// Importa tus componentes
import HomePage from "./components/HomePageComps/HomePage";
import IngresoSesion from "./components/SesionComps/IngresoSesion";
import SeleccionTipo from "./components/PublicarComps/seleccionTipo";
import PublicarProducto1 from "./components/PublicarComps/PublicarProducto1";
import PublicarProducto2 from "./components/PublicarComps/PublicarProducto2";
import PantallaFinal from "./components/PublicarComps/pantallafinal";
import Perfil from "./components/PerfilComps/Perfil";
import Publicacion from "./components/ProductoComps/Publicacion";
import React from "react";
import { StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import { InputProvider } from './context/CrearPublicacionContext';
import { AuthProvider } from "./context/LoginContext";
import { TokenProvider } from "./context/TokenContext";
import { useAuth } from "./context/LoginContext";
import Busqueda from "./components/HomePageComps/Busqueda";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function App() {
  //usar esto para no mostrar la navegacion al publicar si no esta logeado https://reactnavigation.org/docs/auth-flow
  return (
    <TokenProvider>
      <AuthProvider>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen
              name="Publicacion"
              component={Publicacion}
              options={{ header: () => <Busqueda /> }}

            />
            <Drawer.Screen
              name="HomePage"
              component={HomePage}
              options={{ header: () => <Busqueda /> }}
            />

            <Drawer.Screen
              name="Sesion"
              component={IngresoSesion}
              options={{ headerShown: false }}
            />
            <Drawer.Screen
              name="¿Qué querés publicar hoy?"
              component={PublicarStack}
              options={{
                headerShown: false,
                title: "Publicar",
              }}
            />
            <Drawer.Screen
              name="Perfil"
              component={Perfil}
              options={{
                headerStyle: {
                  backgroundColor: "#CE5656",
                },
                headerTitleStyle: {
                  color: "black",
                },
                title: "Perfil",
              }}
            />

          </Drawer.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </TokenProvider>
  );
}
const PublicarStack = () => {
  console.log("PublicarStack")
  return (
    <InputProvider>
      <Stack.Navigator initialRouteName="Seleccion">
        <Stack.Screen
          name="Seleccion"
          component={SeleccionTipo}
          options={{
            headerStyle: {
              backgroundColor: "#CE5656",
            },
            headerTitleStyle: {
              color: "black",
            },
            title: "¿Qué querés publicar hoy?",
          }}
        />
        <Stack.Screen
          name="PublicarProducto1"
          component={PublicarProducto1}
          options={{
            headerStyle: {
              backgroundColor: "#CE5656",
            },
            headerTitleStyle: {
              color: "black",
            },
            title: "Ingrese datos",
          }}
        />
        <Stack.Screen
          name="PublicarProducto2"
          component={PublicarProducto2}
          options={{
            headerStyle: {
              backgroundColor: "#CE5656",
            },
            headerTitleStyle: {
              color: "black",
            },
            title: "Ingrese datos",
          }}
        />
        <Stack.Screen
          name="PantallaFinal"
          component={PantallaFinal}
          options={{
            headerStyle: {
              backgroundColor: "#CE5656",
            },
            headerTitleStyle: {
              color: "black",
            },
            title: "Ingrese datos",
          }}
        />
      </Stack.Navigator>
    </InputProvider>
  );
};
const styles = StyleSheet.create({
  srcBar: {
    bottom: 37
  },
  container: {
    top: 24,
    backgroundColor: '#CE5656',
    height: 56,
    width: 411,
  },
  inputBusqueda: {
    marginTop: 20,
    width: 231,
    height: 40,
    borderRadius: 5,
    padding: 10,
    top: 25.49,
    bottom: 27.45,
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    alignSelf: 'center',
  }
});

export default App;
