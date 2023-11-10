import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Producto from './Producto';

const PublicacionSeccion = (props) =>{
    const [titulo, setTitulo]  = useState("")
    useEffect(() =>{
    function definirTitulo(){
        if(props.tipo == "Servicio"){
            setTitulo("Servicio")
        }
        else {
            setTitulo("Producto");
        }
    }
    definirTitulo()
})
    return(
    <View style={styles.container}>
        <Text style={styles.texto}>{titulo}</Text>
        <Producto props={props}/>
    </View>)
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ECECEC",
        height:260,
        width:410,
        marginTop:-45,  
    },
    texto:{
        left: 14,
        fontSize:25,
        fontWeight: 'bold',
    }

})
export default PublicacionSeccion