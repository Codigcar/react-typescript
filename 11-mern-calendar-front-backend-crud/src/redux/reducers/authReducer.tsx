import { actionTypes } from '../types/type';

export type AuthAction = 
| {type: actionTypes.authLogin, payload: {uid: string, name:string} }
| {type: actionTypes.authCheckingFinish, payload: {email: string, password:string, name:string} }
| {type: actionTypes.authLogout}

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
        case actionTypes.authCheckingFinish:
            return {
                ...state,
                checking: false
            }
        case actionTypes.authLogout:
            return {
                checking:false
            }

        default:
            return state;
    }
}