

import { createContext } from "react";

export interface AuthState {
    name?:string;
    logged: boolean
}
export const authInitialState: AuthState = {
    name: undefined,
    logged: false
}

interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    singOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);