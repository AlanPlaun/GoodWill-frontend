import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TokenProvider } from "./context/TokenContext.js";
import { InputProvider } from './context/CrearPublicacionContext';
import { useFocusEffect } from "@react-navigation/native";
import HomePage from "./components/HomePageComps/HomePage";
import IngresoSesion from "./components/SesionComps/IngresoSesion";
import SeleccionTipo from "./components/PublicarComps/seleccionTipo";
import PublicarProducto1 from "./components/PublicarComps/PublicarProducto1";
import PublicarProducto2 from "./components/PublicarComps/PublicarProducto2";
import PantallaFinal from "./components/PublicarComps/pantallafinal";
import Perfil from "./components/PerfilComps/Perfil";
import Publicacion from "./components/ProductoComps/Publicacion";
import Busqueda from "./components/HomePageComps/Busqueda";
import Contratar from "./components/ContratarComps/Contratar";
import Confirmar from "./components/ContratarComps/Confirmar";
import TusContrataciones from "./components/TusContratacionesComps/Contrataciones";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sesion"
        component={IngresoSesion}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          header: () => <Busqueda />,
        }}
      />
      <Stack.Screen
        name="Publicacion"
        component={Publicacion}
        options={{
          header: () => <Busqueda />,
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
      <Stack.Screen
        name="Confirmar"
        component={Confirmar}
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
    </Stack.Navigator>
  );
};

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

const App = () => {
  return (
    <TokenProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="HomePage"
            component={HomeNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="¿Qué querés publicar hoy?"
            component={PublicarStack}
            options={{
              headerShown: false,
              title: "Publicar",
              DrawerToggleButton: true,
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
          <Drawer.Screen
            name="Mis Contrataciones"
            component={TusContrataciones}
            options={{
              headerStyle: {
                backgroundColor: "#CE5656",
              },
              headerTitleStyle: {
                color: "black",
              },
              title: "Mis Contrataciones",
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </TokenProvider>
  );
};

const styles = StyleSheet.create({
  srcBar: {
    bottom: 37,
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
  },
});

export default App;
