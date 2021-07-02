import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';

export const LoginScreen = ({history}) => {

    // Context: permite ejecutar el useReducer en cualquier
    const { signIn,authState } = useContext(AuthContext);

    const handleClic = () => {
        
        signIn();
        // history.push('/');
        history.replace('/');

       /*  dispatch({
            type:
        }) */
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button className="btn btn-danger" onClick={handleClic}>Ingresar</button>
        </div>
    )
}
