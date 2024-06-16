import { createContext, useContext, useState } from 'react';
import PropTypes from "prop-types";

// Creamos el contexto de usuario
const UserContext = createContext();

// Hook personalizado para acceder al contexto de usuario
export function useUser() {
    return useContext(UserContext);
}

// Componente proveedor del contexto de usuario
export function UserProvider({ children }) {
    const [userId, setUserId] = useState(null); 

    const login = (userId) => {
        setUserId(userId);
    };

    const logout = () => {
        setUserId(null);
    };

    const value = {
        userId,
        login,
        logout,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };