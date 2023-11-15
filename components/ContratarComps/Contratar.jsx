import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Calendar } from "react-native-calendars";
const Contratar = () => {
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState('');

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
        console.log(selectedDate)
    };
    console.log("ashee")
    return (
        <View>
            <View style={styles.ingresar}>
                <Text style={styles.titulo}>Ingresa los datos del producto</Text>
                <Calendar
                    onDayPress={onDayPress}
                    markedDates={{ [selectedDate]: { selected: true, selectedColor: '#3498db' } }}
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: '#00adf5',
                        monthTextColor: '#00adf5',
                        indicatorColor: 'blue',
                        textDayFontFamily: 'monospace',
                        textMonthFontFamily: 'monospace',
                        textDayHeaderFontFamily: 'monospace',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                    }}
                />                    
                <Pressable style={({ pressed }) => [{
                    backgroundColor: pressed ? "#924747" : "#CE5656"
                }, styles.Boton]}
                    onPress={() => {
                        navigation.navigate("Confirmar",  {selectedFecha: selectedDate});
                    }}>
                    <Text style={styles.textoBoton}>Siguiente</Text>
                </Pressable>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    ingresar: {
        top: 30,
        alignItems: "center",

    },
    desplegable: {
        top: 110,
        width: 10,
        height: 30

    },
    container: {
        top: 24,
        backgroundColor: '#CE5656',
        height: 56,
        width: 411,
    },
    textHeader: {
        fontSize: 19,
        fontWeight: "500",
        color: "white",
        top: 12,
        left: 27,
        marginBottom: 32
    },
    titulo: {
        fontWeight: "500",
        fontSize: 20,
        marginBottom: 10,
        right: 22
    }, textoBoton: {
        color: "white",
        fontSize: 17,
        textAlign: "center",
        marginTop: 5,

    },
    Boton: {
        position: "absolute",
        width: 350,
        height: 36,
        borderRadius: 5,
        top: 550,
    }

})
export default Contratar