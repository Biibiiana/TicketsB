import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthWrapper } from "./context/auth.context.jsx";
import './index.css'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AuthWrapper>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AuthWrapper>
  </React.StrictMode>,
)
