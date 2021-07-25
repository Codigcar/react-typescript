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
        <div className="container mt-5">
            <h1 className="text-3xl text-uppercase">Login</h1>
            <hr />
            <button onClick={handleSignIn} className="bg-blue-700 text-white px-10 py-1 rounded border mt-3 shadow-xl">Login</button>

            <div className=" bg-green-500 flex justify-center h-64 ">
                <div className="bg-orange-500 m-2">A</div>
                <div className="bg-orange-500 m-2">A</div>
                <div className="bg-orange-500 m-2">A</div>
                <div className="bg-orange-500 m-2">A</div>
                <div className="bg-orange-500 m-2">A</div>
                <div className="bg-orange-500 m-2">A</div>
            </div>

        </div>
    )
}
