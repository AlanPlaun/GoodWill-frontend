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
import { TokenProvider } from "./context/TokenContext.js";
import Busqueda from "./components/HomePageComps/Busqueda";
import Contratar from "./components/ContratarComps/Contratar";
import { TokenContext } from './context/TokenContext';
import { useContext } from "react";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
//https://aboutreact.com/how-to-hide-navigation-drawer-sidebar-option/
function App() {
  // const { token } = useContext(TokenContext)

  return (
    <TokenProvider>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen
              name="HomePage"
              component={HomeNavigator}
              options={{
                headerShown:false
              }}
            />
            <Drawer.Screen
              name="¿Qué querés publicar hoy?"
              component={PublicarStack}
              options={{
                headerShown: false,
                title: "Publicar",
                DrawerToggleButton: true
              }}
            />

            <Drawer.Screen
              name="Sesion"
              component={IngresoSesion}
              options={{ headerShown: false }}
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
    </TokenProvider>
  );
}


const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          header: () => <Busqueda />
        }} />
      <Stack.Screen
        name="Publicacion"
        component={Publicacion}
         options={{
          header: () => <Busqueda />
        }} 
        />
        <Stack.Screen
        name="Contratar"
        component={Contratar}
        options={{
          headerStyle: {
            backgroundColor: "#CE5656",

          },
          headerTitleStyle: {
            color: "black",
          },

          title: "Contratar servicio",
        }}
        />
    </Stack.Navigator>)
}

const PublicarStack = () => {

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
