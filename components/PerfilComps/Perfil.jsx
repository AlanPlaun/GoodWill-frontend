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
            
            <View style={styles.estrella}>
            <Text style={styles.texto}>Ángel Labruna</Text>

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
            <Text style={styles.titulo}>Arreglo microondas</Text>
            </View>
            <View style={styles.publicacion2}>
            <Image source={require('../../assets/splash/lampara.jpeg')} style={styles.producto} />
            <Text style={styles.titulo}>Arreglo lamparas</Text>
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
        flexDirection: 'row',
    },
    subtitulo: {
        marginLeft: 9,
        fontSize: 17,
        marginBottom:10,
        width:600,
        height:30
    },
    lineaRoja: {
        width: '95%',
        height: 2,
        alignSelf:"center",
        backgroundColor: '#D8D8D8',
        marginBottom:7
    },
    publicaciones:{
        fontSize:19,
        fontWeight:"500"
    },
    producto:{
        width:130,
        height:130,
        marginLeft:40,
        marginTop:10
    },
    publicacion:{
        flexDirection:"row",
         height:150
    },
    publicacion2:{
        flexDirection:"row",
         height:150,
         backgroundColor:"#E1E1E1"
    },
    titulo:{
        fontWeight:500,
        fontSize:16,
        marginTop:24,
        marginLeft:10
    }
})

export { Perfil }
