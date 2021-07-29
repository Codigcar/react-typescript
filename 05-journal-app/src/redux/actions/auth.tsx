import React from 'react'
// import { useDispatch } from "react-redux";
import { firebase, googleAuthProvider } from '../../firebase/firebase-config';

// Ejemplo y prueba de una peticion asyncrona para el Redux con el Store, confirmando el uso de Middleware
export const startLoginEmailPassword = (email:string, password:string) => {
    // const dispatch = useDispatch();
    return (dispatch:any) => {
        setTimeout(() => {
            dispatch(login("123",'CarlosRedux'));
        }, 3000);
    }

}

export const login = (uid: string, displayName: string) => {
    return {
        type: 'login',
        payload: {uid, displayName}
    }
}

export const startGoogleLogin = () => {
    return (dispatch:any) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(userCredential => {
                // console.log(userCredential);
                dispatch(login(userCredential.user?.uid || '', userCredential.user?.displayName || ''));
            })
    }
}