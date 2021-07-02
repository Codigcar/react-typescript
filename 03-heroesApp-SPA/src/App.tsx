import { useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';
import { authReducer } from './auth/authReducer';
import { AuthContext } from './auth/AuthContext';

function App() {

  interface gg {
    logger: string;
  }
  
  const init = ():any => {
    return JSON.parse(localStorage.getItem('user') || '') || {logged: false};
  }

  const [state, dispatch] = useReducer(authReducer, /* initialState */{}, init)
  return (
    <AuthContext.Provider value={{}}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
