import React from 'react'
// import { useDispatch } from "react-redux";
import { firebase, googleAuthProvider } from '../../firebase/firebase-config';
import { ActionType } from '../types/type';
import { finishLoading, startLoading } from './uiActions';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// Ejemplo y prueba de una peticion asyncrona para el Redux con el Store, confirmando el uso de Middleware
export const startLoginEmailPassword = (email:string, password:string) => {
    // const dispatch = useDispatch();
    return (dispatch:any) => {
        // setTimeout(() => {
        //     dispatch(login("123",'CarlosRedux'));
        // }, 3000);
        dispatch( startLoading() );
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch( login(user?.uid || '', user?.displayName || '') )
                dispatch( finishLoading() );
            })
            .catch(e => {
                console.log('error: ',e);
                dispatch( finishLoading() );
                Swal.fire('Error msg', e.message, 'error');
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
                Swal.fire('Error msg', e.message, 'error');
            })
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

export const startLogout = () => {
    return async(disptach:any) => {
        await firebase.auth().signOut();
        disptach( logout() );
    }
}

export const logout = () => {
    return {
        type: ActionType.AuthLogout
    }
}

