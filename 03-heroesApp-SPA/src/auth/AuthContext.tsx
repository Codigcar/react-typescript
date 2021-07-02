import { createContext } from 'react';

// const state = {
//     name: 'Carlos',
//     logged: true
// }
interface AuthContextProps {
    name: string,
    logged: boolean
}

export const AuthContext = createContext({} as AuthContextProps);