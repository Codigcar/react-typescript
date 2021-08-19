import React from 'react'

export const startLoginAction = (email: string, password: string) => {

    return async() => {
        console.log(email, password);
    }

}
