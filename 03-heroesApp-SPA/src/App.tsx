import { useEffect, useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';
import { authReducer } from './auth/authReducer';
import { AuthContext, authInitialState } from './auth/AuthContext';

function App() {
  
  const init = ():any => {
    return JSON.parse(localStorage.getItem('user') || '') || {logged: false, name: undefined};
  }

  // const [user, dispatch] = useReducer(authReducer, /* initialState */{}, init)
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type:'login'});
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(authState));
  }, [authState])

  return (
    <AuthContext.Provider value={{authState: authState, signIn:signIn}}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
