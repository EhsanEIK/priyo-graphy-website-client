import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firbase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // social media sign in
    const socialMediaSignIn = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // sign out
    const logOut = () => {
        localStorage.removeItem('priyo-graphy-token');
        setLoading(true);
        return signOut(auth);
    }

    // get signed in user
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('onauth', loading)
        })
    }, [loading])

    // update user profile
    const updateUserProfile = profile => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        socialMediaSignIn,
        logOut,
        updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;