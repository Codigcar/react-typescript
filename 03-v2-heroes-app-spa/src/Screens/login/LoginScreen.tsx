import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';

export const LoginScreen = ({history}:any) => {

    
    const {signIn, authState} = useContext(AuthContext);

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
