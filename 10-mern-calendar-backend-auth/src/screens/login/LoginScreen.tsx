import React from 'react'

export const LoginScreen = () => {
    return (
        <div >
            <div className="flex  h-screen justify-center items-center  ">
                <div className=" flex  w-2/3 h-3/5 rounded-xl shadow-2xl ">
                    <div className="flex flex-col flex-1">
                        <h1 className="text-center text-3xl font-bold my-16">Login</h1>
                        <div className="flex flex-1 flex-col justify-start items-center ">
                            <input type="text" className="border-2 w-3/4 mb-3 rounded p-1 focus:outline-none focus:border-blue-600" placeholder="Correo" />
                            <input type="text" className="border-2 w-3/4 mb-3 rounded p-1 focus:outline-none focus:border-blue-600" placeholder="Contraseña" />
                            <div className=" border w-3/4 border-none">
                                <p className="w-1/3 bg-blue-600 rounded text-center p-1 text-white cursor-pointer">Ingresar</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 bg-blue-600 rounded-r-xl ">
                        <h1 className="text-center text-3xl font-bold text-white my-16 ">Register</h1>
                        <div className="flex flex-col flex-1 justify-start items-center">
                            <input type="text" className="border-2 w-3/4 mb-3 rounded p-1 focus:outline-none focus:border-blue-600" placeholder="Nombre" />
                            <input type="text" className="border-2 w-3/4 mb-3 rounded p-1 focus:outline-none focus:border-blue-600" placeholder="Correo" />
                            <input type="text" className="border-2 w-3/4 mb-3 rounded p-1 focus:outline-none focus:border-blue-600" placeholder="Contraseña" />
                            <input type="text" className="border-2 w-3/4 mb-3 rounded p-1 focus:outline-none focus:border-blue-600" placeholder="Repite contraseña" />
                            <div className=" border w-3/4 border-none">
                                <p className="w-1/3 rounded text-center p-1 bg-white cursor-pointer">Crear cuenta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
