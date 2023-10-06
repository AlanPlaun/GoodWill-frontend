import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import BarCategorias from './BarCategorias';
const Categorias = () => {

    const [listaCategorias, setlistaCategorias] = useState([])
        useEffect(() => {
<<<<<<< HEAD
            fetch(`http://10.152.2.134:5000/categorias`)
=======
            fetch(`http://10.152.2.135:5000/categorias`)
>>>>>>> 518f5baeb7bd170ff7a91013183d5622783261b5
            
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
