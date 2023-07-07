
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomePage } from './components/HomePageComps/HomePage';
import { SeleccionTipo } from './components/PublicarComps/seleccionTipo';
import { PublicarProducto1 } from './components/PublicarComps/PublicarProducto1';
import { PublicarProducto2 } from './components/PublicarComps/PublicarProducto2';
import { InputProvider } from './context/CrearPublicacionContext';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const PublicarStack = () => {
  return (
    <InputProvider>
        <Stack.Navigator initialRouteName="seleccionTipo">
          <Stack.Screen
            name="seleccionTipo"
            component={SeleccionTipo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PublicarProducto1"
            component={PublicarProducto1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PublicarProducto2"
            component={PublicarProducto2}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
    </InputProvider>
  );
};


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Publicar"
          component={PublicarStack}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;