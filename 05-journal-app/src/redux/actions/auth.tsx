import React from 'react'

export const login = (uid: number, displayName: string) => {
    return {
        type: 'login',
        payload: {uid, displayName}
    }
}
