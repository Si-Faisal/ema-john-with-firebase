import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../../firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);
const ContextProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [signin, setSignin] = useState(false);
    console.log(user)
    const registerinfo = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logeedin = (email, password) => {
        setSignin(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            return unsubscribe;
        }
    }, []);
    const logout = () => {
        return signOut(auth);
    }

    const users = {
        registerinfo,
        logeedin,
        user,
        logout,
        signin
    }
    return (
        <AuthContext.Provider value={users}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;