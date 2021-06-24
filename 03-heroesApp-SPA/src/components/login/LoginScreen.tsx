import React from 'react'

export const LoginScreen = ({history}) => {

    const handleClic = () => {
        // history.push('/');
        history.replace('/');
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button className="btn btn-danger" onClick={handleClic}>Ingresar</button>
        </div>
    )
}
