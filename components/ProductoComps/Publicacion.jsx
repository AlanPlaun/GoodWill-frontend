import React, { useState } from "react";
import {View,Text,StyleSheet,TextInput,Button,Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Publicacion = () => {
 
  const navigation = useNavigation();

  return (
    <View style={styles.Todo}>
      <Text>Lol</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Todo: {
    alignItems: "center",
    justifyContent: "center",
  }
});

export default Publicacion;
