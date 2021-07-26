import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="text-purple-500 font-bold text-3xl mb-5">Register</h3>
      <form className="w-80">
        <input
          className="text-gray-500 border-b-2 text-xl mb-2 h-10 focus:outline-none focus:border-purple-500 w-full transition duration-500"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
        />{" "}
        <input
          className="text-gray-500 border-b-2 text-xl mb-2 h-10 focus:outline-none focus:border-purple-500 w-full transition duration-500"
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />{" "}
        <br />
        <input
          className="text-gray-500 text-xl  border-b-2 mb-2 h-10 focus:outline-none  focus:border-purple-500 w-full transition duration-500"
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          className="text-gray-500 text-xl  border-b-2 mb-2 h-10 focus:outline-none  focus:border-purple-500 w-full transition duration-500"
          type="password"
          placeholder="Confirm Password"
          name="confirm"
        />
        <br />
        <button
          className="bg-purple-500 px-4 py-1 rounded text-base text-white hover:bg-purple-700 w-full"
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
