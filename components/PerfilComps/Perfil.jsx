import { Text, View, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Perfil = () => {
    const navigation = useNavigation();
    const handleNext = () => {
        updateInputValue('titulo', text)
        updateInputValue('descripcion', text2)
        navigation.navigate('PublicarProducto1')
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/splash/electricislo.jpg')} style={styles.image}/>
            
            <Text style={styles.texto}>Ángel Labruna</Text>
            <View style={styles.estrella}>
                <MaterialCommunityIcons name="star" size={40} color="#FFD439" />
                <MaterialCommunityIcons name="star" size={40} color="#FFD439" />
                <MaterialCommunityIcons name="star" size={40} color="#FFD439" />
                <MaterialCommunityIcons name="star" size={40} color="#FFD439" />
                <MaterialCommunityIcons name="star-half" size={40} color="#FFD439" />
            </View>
            <Text style={styles.subtitulo}>Soy el mejor electricista de Almagro</Text>
            <View style={styles.lineaRoja}></View>
            <Text style={styles.publicaciones}>Publicaciones</Text>
            <View style={styles.publicacion}>
            <Image source={require('../../assets/splash/Microondas.jpeg')} style={styles.producto} />
            <Text>Arreglo microondas</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        width: 411,
    },
    image: {
        width: 142,
        height: 139,
        borderRadius: 300,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 27,
        marginLeft: 9
    },
    texto: {
        marginLeft: 9,
        fontSize: 19,
        fontWeight: "700"
    },
    estrella: {
        bottom: 35,
        marginLeft: 165,
        flexDirection: 'row',
    },
    subtitulo: {
        marginLeft: 9,
        bottom: 33,
        fontSize: 17,
        marginBottom:14
    },
    lineaRoja: {
        width: '95%',
        height: 1,
        alignSelf:"center",
        backgroundColor: '#D8D8D8',
        bottom: 31, // Ajusta según tu diseño
    },
    publicaciones:{
        fontSize:19,
        fontWeight:"500"
    },
    producto:{
        width:130,
        height:130,
    },
    publicacion:{
        flexDirection:"row"
    }
})

export { Perfil }
