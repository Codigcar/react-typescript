import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from '../../hooks/Form';
import { login, startLoginEmailPassword, startGoogleLogin } from '../../redux/actions/authActions';

type FormData = {
  email: string,
  password: string
}

type RootState = {
  ui: {loading:boolean}
}

export const LoginScreen = () => {

  const {formulario, handleChange} = useForm<FormData>({email: 'carlos4@gmail.com', password:'123456'});
  const {email, password} = formulario;
  // Hook para hacer dispath de acciones
  const dispatch = useDispatch();
  // Para traer el valor del Loading(true or false) del state
  const parteLoadingState = useSelector((state:RootState) => state.ui.loading);
  console.log(parteLoadingState);
  

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // console.log(email,password);
    // dispatch(login(123, 'Carlos'));
    dispatch(startLoginEmailPassword(email,password));
  }
  
  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }


  return (
    <>
      <h3 className="mb-5 text-3xl font-bold text-purple-500">Login</h3>
      <form className="w-80" onSubmit={handleSubmit}>
        <input
          className="w-full h-10 mb-2 text-xl text-gray-500 transition duration-500 border-b-2 focus:outline-none focus:border-purple-500"
          type="email"
          placeholder="name"
          name="email"
          autoComplete="off"
          onChange={handleChange}
          value={email}
        />{" "}
        <br />
        <input
          className="w-full h-10 mb-5 text-xl text-gray-500 transition duration-500 border-b-2 focus:outline-none focus:border-purple-500"
          type="text"
          placeholder="password"
          name="password"
          autoComplete="off"
          onChange={handleChange}
          value={password}
        />
        <br />
        <button className="w-full px-4 py-1 text-base text-white bg-purple-500 rounded hover:bg-purple-700 disabled:opacity-50" type="submit" disabled={parteLoadingState}>
          {
            parteLoadingState ? 'Cargando...' : 'Login'
          }
        </button>
        <hr />
        <div>
          <p className="mt-6 mb-1 text-base text-center">Loging with social networks</p>
          <div>
            <div className="flex bg-blue-500 cursor-pointer" onClick={handleGoogleLogin}>
                <div className="m-1 bg-white rounded">
                    <img className="w-10 p-3"
                        src="https://cdn.icon-icons.com/icons2/2415/PNG/512/google_original_logo_icon_146496.png"
                        alt=""
                    />
                </div>
                <p className="flex items-center justify-center flex-1 text-base text-white">
                    <b>Sign in with google</b>
                </p>
            </div>
          </div>
        </div>
        <Link to="/auth/register" className="text-base font-normal text-gray-700">Create new account</Link>
      </form>
    </>
  );
};
