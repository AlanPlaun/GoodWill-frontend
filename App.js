
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomePage } from './components/HomePageComps/HomePage';
import { IngresoSesion } from './components/SesionComps/IngresoSesion';
import { SeleccionTipo } from './components/PublicarComps/seleccionTipo';
import { PublicarProducto1 } from './components/PublicarComps/PublicarProducto1';
import { PublicarProducto2} from './components/PublicarComps/PublicarProducto2';
import { PantallaFinal } from './components/PublicarComps/pantallafinal'; 
import {Agradecimiento} from './components/PublicarComps/Agradecimiento';
import { InputProvider } from './context/CrearPublicacionContext';
import {Perfil} from './components/PerfilComps/Perfil';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
//camino publicar (solo se tiene que mostrar si el usuario esta logueado)arreglar
const PublicarStack = () => {
  return (
    <InputProvider>
        <Stack.Navigator initialRouteName="seleccionTipo">
          <Stack.Screen
            name="Seleccion"
            component={SeleccionTipo}
            options={{
              headerStyle: {
                backgroundColor: '#CE5656',
              },
              headerTitleStyle: {
                fontWeight: 'bolds',
                color:"black"
              },title:"¿Qué querés publicar hoy?" 
            }}
          />
          <Stack.Screen
            name="PublicarProducto1"
            component={PublicarProducto1}
            options={{
            headerStyle: {
              backgroundColor: '#CE5656',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color:"black"
            }, title:"Ingrese datos"
          }}
          />
          <Stack.Screen
            name="PublicarProducto2"
            component={PublicarProducto2}
            options={{
              headerStyle: {
                backgroundColor: '#CE5656',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color:"black"
              }, title:"Ingrese datos"
            }}
          />
          <Stack.Screen
            name="Agradecimiento"
            component={Agradecimiento}
            options={{ headerShown: false }}

          />
        </Stack.Navigator>
    </InputProvider>
  );
};

//navegacion total
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
      <Drawer.Screen
          name="Sesion"
          component={IngresoSesion}
          options={{ headerShown: false }}
      />
        <Drawer.Screen 
          name="¿Qué querés publicar hoy?"
          component={PublicarStack}
          options={{ headerShown: false,
          title:"Publicar" }}
          
        />
        <Drawer.Screen 
          name="Perfil"
          component={Perfil}
          options={{
            headerStyle: {
              backgroundColor: '#CE5656',
            },
            headerTitleStyle: {
              fontWeight: 'bolds',
              color:"black"
            },title:"Perfil" 
          }}
          
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;