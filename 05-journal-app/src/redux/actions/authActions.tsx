import React from 'react'
// import { useDispatch } from "react-redux";
import { firebase, googleAuthProvider } from '../../firebase/firebase-config';
import { ActionType } from '../types/type';

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
        type: ActionType.AuthLogin,
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

export const startRegisterWithEmailPasswordName = (email:string, password:string, name:string) => {
    return (dispatch:any) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async({user}) => {
                // Rellenar el dato de displayName y registrarlo en la BD
                await user?.updateProfile({displayName: name});
                // console.log(user);
                dispatch( login(user?.uid || '', user?.displayName || '') )
            })
            .catch(e => {
                console.log('error: ',e);
            })
    }
}
