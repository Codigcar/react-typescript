import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import { startLoginAction } from '../../redux/actions/authActions';

interface FormData {
    loginEmail: string,
    loginPasswod: string
}

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const { formulario, handleChange } = useForm<FormData>({
        loginEmail: 'carlos@gmail.com',
        loginPasswod: '123123'
    });

    const { loginEmail, loginPasswod } = formulario;

    const handleLogin = (e:any) => {
        e.preventDefault();
        // console.log('formulario: ',formulario);
        dispatch(startLoginAction(loginEmail, loginPasswod));
    }

    return (
        <div >
            <div className="flex items-center justify-center h-screen ">
                <div className="flex w-2/3 shadow-2xl h-3/5 rounded-xl">
                    <div className="flex flex-col flex-1">
                        <h1 className="my-16 text-3xl font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="flex flex-col items-center justify-start flex-1 ">
                                <input value={loginEmail} onChange={handleChange} name="loginEmail" type="text" className="w-3/4 p-1 mb-3 border-2 rounded focus:outline-none focus:border-blue-600" placeholder="Correo" />
                                <input value={loginPasswod} onChange={handleChange} name="loginPasswod" type="text" className="w-3/4 p-1 mb-3 border-2 rounded focus:outline-none focus:border-blue-600" placeholder="Contraseña" />
                                <button type="submit" className="w-3/4 border border-none ">
                                    <p className="w-1/3 p-1 text-center text-white bg-blue-600 rounded cursor-pointer">Ingresar</p>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col flex-1 bg-blue-600 rounded-r-xl ">
                        <h1 className="my-16 text-3xl font-bold text-center text-white ">Register</h1>
                        <div className="flex flex-col items-center justify-start flex-1">
                            <input type="text" className="w-3/4 p-1 mb-3 border-2 rounded focus:outline-none focus:border-blue-600" placeholder="Nombre" />
                            <input type="text" className="w-3/4 p-1 mb-3 border-2 rounded focus:outline-none focus:border-blue-600" placeholder="Correo" />
                            <input type="text" className="w-3/4 p-1 mb-3 border-2 rounded focus:outline-none focus:border-blue-600" placeholder="Contraseña" />
                            <input type="text" className="w-3/4 p-1 mb-3 border-2 rounded focus:outline-none focus:border-blue-600" placeholder="Repite contraseña" />
                            <div className="w-3/4 border border-none ">
                                <p className="w-1/3 p-1 text-center bg-white rounded cursor-pointer">Crear cuenta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
