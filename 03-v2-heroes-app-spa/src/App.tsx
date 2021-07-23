import React, { useReducer } from 'react'
import { Navbar } from './components/ui/Navbar'
import { AppRotuer } from './routers/AppRouter';
import './styles/styles.scss';
import { authReducer } from './auth/authReducer';
import { AuthContext } from './auth/AuthContext';
import { useEffect } from 'react';

export const App = () => {

  const init = ():any => {
    return JSON.parse(localStorage.getItem('user') ||'') || {logged:false, name: undefined};
  }

  const [authState, dispatch] = useReducer(authReducer, {}, init)

  const signIn =() => {
    dispatch({type:'login'})
  }
  const signOut = () => {
    dispatch({type:'logout'})
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(authState));
  }, [authState])

  return (
    <AuthContext.Provider value={{authState: authState, signIn:signIn, singOut: signOut}} >
      <AppRotuer />
    </AuthContext.Provider>
  )
}
