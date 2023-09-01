import { View, Text, StyleSheet} from 'react-native';
import Producto from './Producto';

const Servicio = () =>{
    return(
    <View style={styles.container}>
        <Text style={styles.texto}>Servicios</Text>
        <Producto/>
    </View>)
}
const styles = StyleSheet.create({
    container:{
        marginTop:-45,
        backgroundColor:"#ECECEC",
        height:260,
        width:410,
        marginBottom:10,
    },
    texto:{
        left: 14,
        fontSize:25,
        fontWeight: 'bold',

    }

})
export default Servicio