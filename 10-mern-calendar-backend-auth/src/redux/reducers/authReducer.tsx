import { actionTypes } from '../types/type';

export type AuthAction = 
| {type: actionTypes.uiOpenModal }
| {type: actionTypes.authLogin, payload: {uid: string, name:string} }

export interface AuthState {
    checking: boolean
}

const initialState: AuthState = {
    checking: true
}

export const authReducer = (state:AuthState = initialState, action: AuthAction): AuthState => {

    switch (action.type) {
        case actionTypes.authLogin:
            return {
                ...state,
                checking: false,
                ...action.payload
            }

        default:
            return state;
    }
}