import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import { startLoginAction, startRegisterAction } from '../../redux/actions/authActions';

interface FormDataLogin {
    loginEmail: string,
    loginPasswod: string
}

interface FormDataRegister {
    registerName: string,
    registerEmail: string,
    registerPassword1: string,
    registerPassword2: string
}

export const LoginScreen = () => {

    const dispatch = useDispatch();

    // Login
    const { formulario, handleChange } = useForm<FormDataLogin>({
        loginEmail: 'carlos@gmail.com',
        loginPasswod: '123123'
    });

    const { loginEmail, loginPasswod } = formulario;

    const handleLogin = (e: any) => {
        e.preventDefault();
        // console.log('formulario: ',formulario);
        dispatch(startLoginAction(loginEmail, loginPasswod));
    }

    // --Login

    // Register
    const { formulario: { registerName, registerEmail, registerPassword1, registerPassword2 }, handleChange: handleInputRegisterChange } = useForm<FormDataRegister>({
        registerName: 'Estefanny',
        registerEmail: 'estefanny@gmail.com',
        registerPassword1: '123123',
        registerPassword2: '123123',
    })
   

   
    const handleRegisterSubmit = (e: any) => {
        e.preventDefault();
        // console.log('formulario: ',formulario);
        dispatch(startRegisterAction(registerEmail, registerPassword1, registerName));
        // console.log('hola');
        
    }
    // --Register


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
                        <form onSubmit={handleRegisterSubmit}>
                            <div className="flex flex-col items-center justify-start flex-1">
                                <input type="text" className="w-3/4 p-1 mb-3 border-2 rounded focus:outline-none focus:border-blue-600" placeholder="Nombre"
                                    name="registerName"
                                    value={registerName}
                                    onChange={handleInputRegisterChange}
                                />
                                <input type="text" className="w-3/4 p-1 mb-3 border-2 rounded focus:outline-none focus:border-blue-600" placeholder="Correo"
                                    name="registerEmail"
                                    value={registerEmail}
                                    onChange={handleInputRegisterChange}
                                />
                                <input type="text" className="w-3/4 p-1 mb-3 border-2 rounded focus:outline-none focus:border-blue-600" placeholder="Contraseña"
                                    name="registerPassword1"
                                    value={registerPassword1}
                                    onChange={handleInputRegisterChange}
                                />
                                <input type="text" className="w-3/4 p-1 mb-3 border-2 rounded focus:outline-none focus:border-blue-600" placeholder="Repite contraseña"
                                    name="registerPassword2"
                                    value={registerPassword2}
                                    onChange={handleInputRegisterChange}
                                />
                                <button type="submit" className="w-3/4 border border-none ">
                                    <p className="w-1/3 p-1 text-center bg-white rounded cursor-pointer">Crear cuenta</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
