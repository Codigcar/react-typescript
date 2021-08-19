import { actionTypes } from '../types/type';

export type AuthAction = 
| {type: actionTypes.uiOpenModal }

export interface AuthState {
    checking: boolean
}

const initialState: AuthState = {
    checking: true
}

export const authReducer = (state:AuthState = initialState, action: AuthAction): AuthState => {

    switch (action.type) {

        


        default:
            return state;
    }


}