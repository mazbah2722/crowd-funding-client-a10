import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const createUser =(email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const singInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const singOut = () => {
        setLoading(true);
        return signOut(auth);
    };
    const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser , updatedData);
    }
    
    const authInfo = {
        name:"halim",
        user,
        setUser,
        loading,
        createUser,
        logInUser,
        singOut,
        updateUserProfile,
        auth,
        singInWithGoogle,
        
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
           
        } )
        return ()=>{
            unsubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;