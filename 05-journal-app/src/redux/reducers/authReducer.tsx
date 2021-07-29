import React from 'react'

export type AuthAction = 
    | {type:'login',payload: {uid:number, displayName:string}}
    | {type:'logout'};

export interface AuthState {
    uid?: number;
    name: string;
}

const authInitialState: AuthState = {
    uid: undefined,
    name: ''
}

export const authReducer = (state: AuthState = authInitialState, action: AuthAction):AuthState => {
   switch (action.type) {
       case 'login':
           return {
               ...state,
               uid: action.payload.uid,
               name: action.payload.displayName
           }
        case 'logout':
            return {
                ...state,
                uid: undefined,
                name: ''
            }
       default:
           return state;
   }
}
