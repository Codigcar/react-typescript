import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';

// Configuración consola Redux
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// end Configuración consola Redux


const reducers = combineReducers({
    auth: authReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk) ),

);