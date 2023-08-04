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
            <Text>Hola</Text>
        </View>
    )



}
const styles = StyleSheet.create({
container:{
    backgroundColor:"red",
    position:"absolute",
    width:100
}


})
export  {Agradecimiento}