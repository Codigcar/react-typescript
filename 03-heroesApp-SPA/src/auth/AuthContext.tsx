import { createContext } from 'react';

// const state = {
//     name: 'Carlos',
//     logged: true
// }

// Definir la estructura
export interface AuthState {
    name?:string,
    logged: boolean
}

// Estado inicial
export const authInitialState: AuthState = {
    name: undefined,
    logged: false
}

interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);