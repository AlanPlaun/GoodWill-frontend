import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TokenContext } from '../../context/TokenContext';

const Confirmar = (props) => {
  const navigation = useNavigation();
  const publicacionData = props.route.params.selectedPublicacion;
  const fecha = props.route.params.selectedFecha;
  const { token } = React.useContext(TokenContext);

  const Presionar = async () => {
    try {
      const response = await fetch('http://192.168.0.23:5000/contratar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'user_token': token,
        },
        body: JSON.stringify({
          idPublicacion: publicacionData.idPubli,
          fecha: fecha,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data)
      if (data.haContratado) {
        // El usuario ya ha contratado este producto, muestra un alert
        alert('Contratación duplicada', data.message);
        navigation.navigate('Home');  
      } else {
        // Contratación exitosa, puedes hacer algo más si es necesario
        console.log(data.contratacion);
        navigation.navigate('Home');
      }
    } catch (error) {
      console.error(error);
      alert('Error', 'Hubo un error al procesar la contratación');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        ¿Está seguro que quiere contratar el servicio {publicacionData.nombre} para el día de {fecha}?
      </Text>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#924747' : '#CE5656' },
          styles.boton,
        ]}
        onPress={Presionar}>
        <Text style={styles.textoBoton}>Contratar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  boton: {
    width: 124,
    height: 44,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  textoBoton: {
    fontSize: 19,
    color: 'white',
    fontWeight: '400',
    alignSelf: 'center',
  },
  titulo: {
    fontWeight: '500',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Confirmar;
