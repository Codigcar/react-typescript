import React from 'react'
import { fetchSinToken } from '../../helpers/fetch';
import { actionTypes } from '../types/type';

export const startLoginAction = (email: string, password: string) => {

    return async (dispatch:any) => {
        console.log(email, password);
        const resp = await fetchSinToken('auth', { email, password }, 'POST');
        const body = await resp.json();

        console.log('back resp: ', body);

        if (body.ok) {
            localStorage.setItem('token', body.token);
            // para saber cuanto hace falta que el token expire, guardar la hora
            localStorage.setItem('token-init-date', new Date().getTime().toString());

            dispatch(login({uid: body.uid, name: body.name}));
        }
    }
}

const login = (user: any) => {
    return {
        type: actionTypes.authLogin,
        payload: user
    }
}