import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react'
import { i18nInstance } from './i18n.ts';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
i18nInstance.init(()=> {
    root.render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </React.StrictMode>
)});


