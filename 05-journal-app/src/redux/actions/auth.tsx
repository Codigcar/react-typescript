import React from 'react'
// import { useDispatch } from "react-redux";


// Ejemplo y prueba de una peticion asyncrona para el Redux con el Store, confirmando el uso de Middleware
export const startLoginEmailPassword = (email:string, password:string) => {
    // const dispatch = useDispatch();

    return (dispatch:any) => {
        setTimeout(() => {
            dispatch(login(123,'CarlosRedux'));
        }, 3000);
    }

}

export const login = (uid: number, displayName: string) => {
    return {
        type: 'login',
        payload: {uid, displayName}
    }
}
