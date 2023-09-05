// Importa tus componentes
import HomePage from "./components/HomePageComps/HomePage";
import IngresoSesion from "./components/SesionComps/IngresoSesion";
import SeleccionTipo from "./components/PublicarComps/seleccionTipo";
import PublicarProducto1 from "./components/PublicarComps/PublicarProducto1";
import PublicarProducto2 from "./components/PublicarComps/PublicarProducto2";
import PantallaFinal from "./components/PublicarComps/pantallafinal";
import Perfil from "./components/PerfilComps/Perfil";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { InputProvider } from './context/CrearPublicacionContext';
import { AuthProvider } from "./context/LoginContext";
import { TokenProvider } from "./context/TokenContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function App() {
  return (
    <TokenProvider>
      <AuthProvider>
        <NavigationContainer>
          <Drawer.Navigator>
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
  //No funciona buscar como hacerlo
  //const {login,logout}  = useAuth();
  //if (!loggedIn) {
  //  navigation.navigate("Sesion");
  //  return null;
  //}

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

export default App;
