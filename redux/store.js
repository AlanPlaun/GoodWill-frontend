import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice.js'; // Ajusta la ruta correcta
import tokenReducer from './tokenSlice.js'; // Ajusta la ruta correcta

const store = configureStore({
  reducer: {
    login: loginReducer,
    token: tokenReducer,
    // Otros reducers si los tienes
  },
});

export default store;