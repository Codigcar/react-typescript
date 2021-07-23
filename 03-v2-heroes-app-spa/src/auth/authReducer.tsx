import { AuthState } from './AuthContext';

type AuthAction =
 | {type: 'login'}
 | {type: 'logout'};


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                logged:true,
                name:'Carlos'
            }
        case 'logout':
            return {
                ...state,
                logged:false,
                name: undefined
            }
        default:
            return state;
    }
}