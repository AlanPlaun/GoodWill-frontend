import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider,  useSelector} from 'react-redux';
import store from './redux/store'; 

// Importa tus componentes
import HomePage from './components/HomePageComps/HomePage';
import IngresoSesion from './components/SesionComps/IngresoSesion';
import SeleccionTipo from './components/PublicarComps/seleccionTipo';
import PublicarProducto1 from './components/PublicarComps/PublicarProducto1';
import PublicarProducto2 from './components/PublicarComps/PublicarProducto2';
import PantallaFinal from './components/PublicarComps/pantallafinal';
import Perfil from './components/PerfilComps/Perfil';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const navigation = useNavigation(); 

const PublicarStack = () => {
  //deberia funcionar (no lo probe, chequea el inicio de sesion y si no esta logeado te manda a la pantalla de inicio de sesion, ademas pasa el token a todas las pantallas. )
  const loggedIn = useSelector(state => state.login.loggedIn);

    if (!loggedIn) {
      navigation.navigate('Sesion');
      return null;
    }

  return (
    <Provider store={store}>
      <Stack.Navigator initialRouteName="Seleccion">
        <Stack.Screen
          name="Seleccion"
          component={SeleccionTipo}
          options={{
            headerStyle: {
              backgroundColor: '#CE5656',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: "black"
            }, title: "¿Qué querés publicar hoy?"
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
              color: "black"
            }, title: "Ingrese datos"
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
              color: "black"
            }, title: "Ingrese datos"
          }}
        />
        <Stack.Screen
          name="PantallaFinal"
          component={PantallaFinal}
          options={{
            headerStyle: {
              backgroundColor: '#CE5656',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: "black"
            }, title: "Ingrese datos"
          }}
        />
      </Stack.Navigator>
    </Provider>
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
          name="Sesion"
          component={IngresoSesion}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="¿Qué querés publicar hoy?"
          component={PublicarStack}
          options={{
            headerShown: false,
            title: "Publicar"
          }}
        />
        <Drawer.Screen
          name="Perfil"
          component={Perfil}
          options={{
            headerStyle: {
              backgroundColor: '#CE5656',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: "black"
            }, title: "Perfil"
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
