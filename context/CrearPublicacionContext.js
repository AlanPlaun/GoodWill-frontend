import React, { createContext, useState } from 'react';

const InputContext = createContext();
const InputProvider = ({ children }) => {
  const [inputValues, setInputValues] = useState({});
  const updateInputValue = (screenId, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [screenId]: value,
    }));
    console.log(inputValues)
  };

  return (
    <InputContext.Provider value={{ inputValues, updateInputValue }}>
      {children}
    </InputContext.Provider>
  );
};

export { InputContext, InputProvider };