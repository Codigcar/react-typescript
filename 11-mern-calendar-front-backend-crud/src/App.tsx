import React from 'react'
import { AppRouter } from './routes/AppRouter';
import './assets/main.css'
import './assets/style.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
    )
}
