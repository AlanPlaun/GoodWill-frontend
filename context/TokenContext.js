// './context/TokenContext.js'
import React, { createContext, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const TokenContext = createContext();

export const TokenProvider = (props) => {
    const [token, setToken] = React.useState(AsyncStorage.getItem("usuario")||null);

    return <TokenContext.Provider value={{ token, setToken }}>{props.children}</TokenContext.Provider>;
};
