
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomePage } from './components/HomePageComps/HomePage';
import { SeleccionTipo } from './components/PublicarComps/seleccionTipo';
import { PublicarProducto1 } from './components/PublicarComps/PublicarProducto1';
import { PublicarProducto3} from './components/PublicarComps/PublicarProducto3';
import { PantallaFinal } from './components/PublicarComps/pantallafinal'; 
import { InputProvider } from './context/CrearPublicacionContext';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
//camino publicar
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
            name="PublicarProducto3"
            component={PublicarProducto3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PantallaFinal"
            component={PantallaFinal}
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