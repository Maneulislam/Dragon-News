import React, { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: "Maneul"

    })

    const userInfo = {
        user,
        setUser
    }

    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;