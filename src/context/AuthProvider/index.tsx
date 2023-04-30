import React, {createContext, useEffect, useState} from 'react';
import { IAuthProvider, IContext, IUser, } from "./types";
import { CreateUser, LoginRequest, getUserLocalStorage, setUserLocalStorage } from './util';

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children}: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()

    useEffect(() => {
        const user = getUserLocalStorage()

        if (user) {
            setUser(user);
        }
    }, []);


 async function authenticate (email: string, password:string) {
    const response = await LoginRequest(email, password)

    const payload = {token: response.token, email}

    setUser(payload);
    setUserLocalStorage(payload);

 }

 async function createuser (username:string, email: string, password:string) {
    const response = await CreateUser(username, email, password)
    const payload = {token: response.token, email}

    setUser(payload);
    setUserLocalStorage(payload);

 }

    function logout () {
        setUser(null);
        setUserLocalStorage(null);
        
    }

    return (
    <AuthContext.Provider value={{...user, authenticate, logout, createuser}}> 
    {children}
    </AuthContext.Provider>

)
}