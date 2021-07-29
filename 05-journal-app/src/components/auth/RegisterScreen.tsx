import React from "react";
import { Link } from "react-router-dom";
import validator from 'validator';

import { useForm } from '../../hooks/Form';

export const RegisterScreen = () => {

  type FormData = {
    name: string,
    email: string,
    password: string,
    password2: string
  }

  const {formulario, handleChange} = useForm<FormData>({
    name:'carlos',
    email:'carlos@gmail.com',
    password:'123',
    password2:'123'
  });

  const {name, email, password, password2} = formulario;

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // console.log(name, email, password, password2);

    if(isFormValid()) {
      console.log('Formulario correcto');
    }
  }

  const isFormValid = () => {
    if(name.trim().length === 0){
      console.log('Name is required');
      return false;
    } else if( !validator.isEmail(email) ){
      console.log('Email is not valid');
      return false;
    } else if (password !== password2 || password.length < 5){
      console.log('Passowrd incorrect or length < 5');
      return false;
    }
    return true;
  }


  return (
    <>
      <h3 className="mb-5 text-3xl font-bold text-purple-500">Register</h3>
      <form onSubmit={handleSubmit} className="w-80">
        <input
          className="w-full h-10 mb-2 text-xl text-gray-500 transition duration-500 border-b-2 focus:outline-none focus:border-purple-500"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />{" "}
        <input
          className="w-full h-10 mb-2 text-xl text-gray-500 transition duration-500 border-b-2 focus:outline-none focus:border-purple-500"
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          className="w-full h-10 mb-2 text-xl text-gray-500 transition duration-500 border-b-2 focus:outline-none focus:border-purple-500"
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <input
          className="w-full h-10 mb-2 text-xl text-gray-500 transition duration-500 border-b-2 focus:outline-none focus:border-purple-500"
          type="text"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={handleChange}
        />
        <br />
        <button
          className="w-full px-4 py-1 text-base text-white bg-purple-500 rounded hover:bg-purple-700"
          type="submit"
        >
          Register
        </button>
       
        <Link to="/auth/login" className="text-base font-normal text-gray-700">
          Already registeres?
        </Link>
      </form>
    </>
  );
};
