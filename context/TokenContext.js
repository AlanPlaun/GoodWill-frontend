import React, { createContext, useContext, useReducer } from 'react';

const TokenContext = createContext();

export const useToken = () => {
  return useContext(TokenContext);
};

const initialState = {
  value: null,
};

const tokenReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, value: action.payload };
    case 'CLEAR_TOKEN':
      return { ...state, value: null };
    default:
      return state;
  }
};

export const TokenProvider = ({ children }) => {
  const [tokenState, dispatch] = useReducer(tokenReducer, initialState);

  const setToken = (token) => {
    dispatch({ type: 'SET_TOKEN', payload: token });
  };

  const clearToken = () => {
    dispatch({ type: 'CLEAR_TOKEN' });
  };

  return (
    <TokenContext.Provider value={{ tokenState, setToken, clearToken }}>
      {children}
    </TokenContext.Provider>
  );
};