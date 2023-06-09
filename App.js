import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IngresoSesion } from './components/IngresoSesion';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="IngresoSesion" component={IngresoSesion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;