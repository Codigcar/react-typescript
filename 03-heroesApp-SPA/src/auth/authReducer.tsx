import { AuthState } from './AuthContext';

// Estado si el usuario se logea
// const state = {
//     name: 'Carlos',
//     logged: true
// }
type AuthAction =
    | {type:'login'}
    | {type:'logout'};

    /* login: '[auth] login',
    logout: '[auth] logout' */
    
/* export const authReducer = (state ={}, action) => {
    switch (action.type) {
        case  types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
        default:
            return state;
    }
} */

export const authReducer = (state: AuthState, action: AuthAction): AuthState  => {
    switch (action.type) {
        case  'login':
            return {
                ...state,
                logged: true,
                name:'carlos'
            }
        case 'logout':
            return {
                ...state,
                logged: false,
                name: undefined
            }
        default:
            return state;
    }
}