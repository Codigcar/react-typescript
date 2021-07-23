import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';

export const LoginScreen = ({history}:any) => {

    
    const {signIn, authState} = useContext(AuthContext);

    // Si hay algo guardado en el localStorage que lo retorne, si no hay nada que retorne un '/
    const lastPath = localStorage.getItem('lastPath') || '/';

    const handleSignIn = () => {
        signIn();
        history.replace('/');
    }


    return (
        <div>
            Login
            <hr />
            <button onClick={handleSignIn}>Login</button>
        </div>
    )
}
