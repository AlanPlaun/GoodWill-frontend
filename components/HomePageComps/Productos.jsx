import { View, Text, StyleSheet} from 'react-native';
import Producto from './Producto';

const Productos = () =>{
    return(
    <View style={styles.container}>
        <Text style={styles.texto}>Productos</Text>
        <Producto/>
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
        fontWeight: 600
    }

})
export default Productos