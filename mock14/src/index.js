import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import MainContext from './useContext/MainContext';
import {
  BrowserRouter,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainContext>
  <BrowserRouter>
  <ChakraProvider>
      <App/>
  </ChakraProvider>
  </BrowserRouter>
  </MainContext>
);

