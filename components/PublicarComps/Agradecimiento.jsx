import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Agradecimiento = () =>{
    const navigation = useNavigation();
    const handleNext = () => {
        updateInputValue('titulo', text)
        updateInputValue('descripcion', text2)
        navigation.navigate('PublicarProducto1')
      };

    return(
        <View style={styles.container}>

            <Text style={styles.texto}>:)</Text>
        </View>
    )



}
const styles = StyleSheet.create({
container:{
    top: 24,
    backgroundColor: '#CE5656',
    height: 56,
    width: 411,
    backgroundColor:"red",
},
texto:{
    alignContent: "center",
    alignItems:"center",
}


})
export  {Agradecimiento}