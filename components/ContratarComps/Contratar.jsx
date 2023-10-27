import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

const Contratar = () => {
    console.log("ashee")
    return (
        <View style={styles.container}>
            <Text>
                ¿Para cuándo lo querés?
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red"
    }
})

export default Contratar