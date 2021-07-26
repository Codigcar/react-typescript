import React from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <>
      <h3 className="text-purple-500 font-bold text-3xl mb-5">Login</h3>
      <form className="w-80">
        <input
          className="text-gray-500 border-b-2 text-xl mb-2 h-10 focus:outline-none focus:border-purple-500 w-full transition duration-500"
          type="email"
          placeholder="name"
          name="email"
          autoComplete="off"
        />{" "}
        <br />
        <input
          className="text-gray-500 text-xl  border-b-2 mb-5 h-10 focus:outline-none  focus:border-purple-500 w-full transition duration-500"
          type="password"
          placeholder="password"
          name="password"
        />
        <br />
        <button className="bg-purple-500 px-4 py-1 rounded text-base text-white hover:bg-purple-700 w-full" type="submit">Login</button>
        <hr />
        <div>
          <p className="text-base mt-6 mb-1 text-center">Loging with social networks</p>
          <div>
            <div className="bg-blue-500 flex">
                <div className="bg-white m-1 rounded">
                    <img className="w-10 p-3"
                        src="https://cdn.icon-icons.com/icons2/2415/PNG/512/google_original_logo_icon_146496.png"
                        alt=""
                    />
                </div>
                <p className="text-white text-base flex flex-1 justify-center items-center">
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
