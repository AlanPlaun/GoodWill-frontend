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
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
//no funciona ninguna navegacion
const PublicarStack = () => {
  console.log("hola")
  //const loggedIn = useSelector((state) => state.login.loggedIn);
  //const navigation = useNavigation();

  //if (!loggedIn) {
  //  navigation.navigate("Sesion");
  //  return null;
  //}

  return (
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
  );
};

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
