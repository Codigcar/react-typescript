import React from 'react'

type AuthAction = 
    | {type:'login'}
    | {type:'logout'};

interface AuthState {
    uid: string;
    name: string;
}

const authInitialState: AuthState = {
    uid: '',
    name: ''
}

export const authReducer = (state: AuthState = authInitialState, action: AuthAction):AuthState => {
   switch (action.type) {
       case 'login':
           return {
               ...state,
               uid: '',
               name: ''
           }
        case 'logout':
            return {
                ...state,
                uid: '',
                name: ''
            }
       default:
           return state;
   }
}
