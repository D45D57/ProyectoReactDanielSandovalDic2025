import React, { useContext, useState, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState (() => {

        return localStorage.getItem ("token") || null;

    })
    const login = (user, pass) => {
        if (user == "admin" && pass == "1234") {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30'

            setToken (token);
            localStorage.setItem ("token", token);
            return true;
        }
    
        return false
    }

    const logout = () => {
        setToken (null);
        localStorage.removeItem ("token");
    }

    return (

            <AuthContext.Provider value = {{token, login, logout}}>
            {children}
            </AuthContext.Provider>

    )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);