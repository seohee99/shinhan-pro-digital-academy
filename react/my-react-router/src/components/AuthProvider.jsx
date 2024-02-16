import React, {createContext, useCallback, useState} from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const [user, setUser] = useState(null);

    const clientLogin = useCallback((user) => {
        setUser(user);
    },[]);
    const clientLogout = useCallback(() => {
        setUser(null);
    },[]);

    return (
        <AuthContext.Provider
            value={{
                user,
                clientLogin,
                clientLogout
            }}>
                {children}
        </AuthContext.Provider>
    )
}