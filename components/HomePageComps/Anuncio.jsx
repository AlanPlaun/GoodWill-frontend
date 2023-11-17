import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Anuncio = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.foto} source={require('../../assets/splash/electricistas.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginTop:50,
    height: 206,
    width: 411,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 327,
    height: 182,
  },
});

export default Anuncio;
