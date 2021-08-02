import React from 'react'
import { ActionType } from '../types/type';

export type AuthAction = 
    | {type: ActionType.AuthLogin ,payload: {uid:string, displayName:string}}
    | {type: ActionType.AuthLogout };

export interface AuthState {
    uid: string;
    name: string;
}

const authInitialState: AuthState = {
    uid: '',
    name: ''
}

export const authReducer = (state: AuthState = authInitialState, action: AuthAction):AuthState => {
   switch (action.type) {
       case ActionType.AuthLogin:
           return {
               ...state,
               uid: action.payload.uid,
               name: action.payload.displayName
           }
        case ActionType.AuthLogout:
            return {
                ...state,
                uid: '',
                name: ''
            }
       default:
           return state;
   }
}
