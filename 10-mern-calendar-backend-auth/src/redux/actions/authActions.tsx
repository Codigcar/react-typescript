import React from 'react'
import Swal from 'sweetalert2';
import { fetchConToken, fetchSinToken } from '../../helpers/fetch';
import { actionTypes } from '../types/type';

export const startLoginAction = (email: string, password: string) => {

    return async (dispatch:any) => {
        console.log('Datos Login: ', email, password);
        const resp = await fetchSinToken('auth', { email, password }, 'POST');
        const body = await resp.json();

        console.log('back login resp: ', body);

        if (body.ok) {
            localStorage.setItem('token', body.token);
            // para saber cuanto hace falta que el token expire, guardar la hora
            localStorage.setItem('token-init-date', new Date().getTime().toString());

            dispatch(login({uid: body.uid, name: body.name}));
        } else {
            Swal.fire('Error', body.msg, 'error')
        }
    }
}


export const startRegisterAction = (email:string, password: string, name:string ) => {
    return async(dispatch: any) => {
        console.log('Datos Register: ', email, password, name);
        const resp = await fetchSinToken('auth/new', {email, password, name}, 'POST');
        const body = await resp.json();
        
        console.log('back register resp: ', body);
        
        if (body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());
            
            dispatch(login({uid: body.uid, name: body.name}));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startCheckingAction = () => {
    return async(dispatch:any) => {
        const resp = await fetchConToken('auth/renew');
        const body = await resp.json();
        
        console.log('startCheckingAction resp: ', body);
        
        if (body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());
            
            dispatch(login({uid: body.uid, name: body.name}));
        } else {
            Swal.fire('Error', body.msg, 'error');
            dispatch(checkingFinish());
        }
    }
}

const checkingFinish = () => {
    return {
        type: actionTypes.authCheckingFinish
    }
}

const login = (user: any) => {
    return {
        type: actionTypes.authLogin,
        payload: user
    }
}

// const register = (user:any) => {
//     return {

//     }
// }



