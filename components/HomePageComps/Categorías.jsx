import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import BarCategorias from './BarCategorias';
const Categorias = () => {

    const [listaCategorias, setlistaCategorias] = useState([])
        useEffect(() => {
            fetch(`https://1e8f-200-73-176-50.ngrok-free.app/categorias`)
            
            .then(res => res.json())
            .then(data => {
              console.log(data)
              setlistaCategorias(data)
            });
        }, []);
return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                {listaCategorias.map(categorias =>( 
                <BarCategorias
                key={categorias.idCategoria} nombre={categorias.categoria} fkPublicacion={categorias.fkTipoPublicacion} foto={categorias.imagen}/>
                ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 118,
        flexDirection: 'row', // Agregado para colocar los elementos en fila
        marginRight:10
    },
    categoria: {
        marginLeft: 30, // Ajusta el espaciado entre las categorías si es necesario
    },
    foto: {
        borderColor: "black",
        width: 45,
        height: 46,
        left: 6
    },
    texto: {
        fontSize: 12,
    }
})

export default Categorias
