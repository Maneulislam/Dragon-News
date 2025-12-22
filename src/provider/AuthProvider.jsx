import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../components/Firebase/firebase.init';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [])



    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const logIn = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {

        return signOut(auth)
    }



    const userInfo = {
        user,
        setUser,
        createUser,
        logIn,
        logOut,
        loading,
        setLoading,
        updateUser,
    }

    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;