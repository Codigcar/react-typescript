import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { uiReducer } from "../reducers/uiReducer";
import { notesReducer } from '../reducers/notesReducer';

// Configuración consola Redux
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// end Configuración consola Redux


const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk) ),

);