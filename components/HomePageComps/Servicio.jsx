import { View, Text, StyleSheet} from 'react-native';
import Producto from './Producto';

const Servicio = () =>{
    return(
    <View style={styles.container}>
        <Text style={styles.texto}>Servicios</Text>
    </View>)
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ECECEC",
        width:410
    },
    texto:{
        left: 14,
        fontSize:25
    }

})
export default Servicio