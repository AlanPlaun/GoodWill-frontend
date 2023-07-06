import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IngresoSesion } from './components/SesionComps/IngresoSesion';
import  {HomePage} from './components/HomePageComps/HomePage';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Menu = createDrawerNavigator()

function App() {
  const [key, setKey] = useState([]);
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name="IngresoSesion" component={IngresoSesion} options={{ headerShown: false }} />
        <Menu.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}/>
      </Menu.Navigator>
    </NavigationContainer>
  );
}

export default App;
