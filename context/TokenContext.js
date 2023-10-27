// './context/TokenContext.js'
import React, { createContext, useContext} from 'react';

export const TokenContext = createContext();

export const TokenProvider = (props) => {
    const [token, setToken] = React.useState(localStorage.getItem("usuario")||null);

    return <TokenContext.Provider value={{ token, setToken }}>{props.children}</TokenContext.Provider>;
};
