import { useState, useEffect, createContext, useContext } from "react";
const PublicacionContext = createContext()
export default function PublicacionProvider({ children }) {
    const [listaPublicacionesGuardadas, setListaPublicacionesGuardadas] = useState([])
    const[listaFechas, setListFecha] = useState([])
    function Presionar2(){
        console.log("lol")
    }
    function GuardarContratacion(selectedPublicacion, fechaPublicacion){
        setListaPublicacionesGuardadas([...listaPublicacionesGuardadas, selectedPublicacion])
        setListFecha([...listaFechas, fechaPublicacion])
        console.log("Ok")
    }
    return (
        <PublicacionContext.Provider value={{ Presionar2, GuardarContratacion, listaPublicacionesGuardadas}}>
            {children}
        </PublicacionContext.Provider>
    )
}
export function usePublicacion() {
    return useContext(PublicacionContext)
}