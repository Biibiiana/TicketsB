import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthWrapper } from "./context/auth.context.jsx";
import { UserProvider } from './context/UserContext.jsx';
import SessionManager from './components/sessionwarning.jsx';
import './index.css'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AuthWrapper>
      <UserProvider>
        <SessionManager />
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </UserProvider>
    </AuthWrapper>
  </React.StrictMode>,
)
