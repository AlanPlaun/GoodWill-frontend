import Producto from './Producto';
import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import { useState, useEffect } from 'react';
import CardProducto from './CardProducto';

const Productos = () => {
    const [listaProductos, setListaProductos] = useState([])
    useEffect(() => {
        fetch(`https://9e2c-200-73-176-51.ngrok-free.app/publicaciones`)

            .then(res => res.json())
            .then(data => {
                console.log(data)
                setListaProductos(data)
            });

    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Productos</Text>
            <View style={styles.container2}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {listaProductos.map(productos => (
                        <View style={styles.card} key={productos.idPublicacion}>
                            <CardProducto
                                nombre={productos.titulo} descripcion={productos.descripcion} ubicacion={productos.ubicacion} nombreUsuario={productos.nombreUsuario} imagenUsuario={productos.img} imagenPublicacion={productos.imagen}
                            />
                        </View>
                    ))
                    }
                </ScrollView>
            </View>
        </View>)
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ECECEC",
        height: 260,
        width: 410,
        marginTop: -45,
    },
    texto: {
        left: 14,
        fontSize: 25,
        fontWeight: 'bold',
    },
    container2: {
        flexDirection: 'row', // Agregado para colocar los elementos en fila

    },
    card: {
        width: 130,
        height: 200,
        borderRadius: 8,
        top: 7,
        backgroundColor: '#ffffff',
        right: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30, // Ajusta el espaciado entre las categorías si es necesario
    },
    cardContain: {
        left: 13,
    },
    image: {
        left: 1,
        width: 100,
        height: 100,
        marginBottom: 8,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 0,
        fontSize: 14
    },
    subtitle: {
        fontWeight: 'light',
        color: "grey",
        marginBottom: 15,
        fontSize: 14
    },
    name: {
        fontWeight: 'light',
        fontSize: 12,
        width: 130,
        color: "grey",
    },

})
export default Productos