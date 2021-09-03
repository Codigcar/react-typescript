import React, { useState } from 'react'
import './App.scss'
import { HomeView } from './views/HomeView';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Switch } from '@material-ui/core'

import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import './tailwind.css';
import { LoginView } from './views/LoginView';

export const App = () => {

  const [modeDark, setModeDark] = useState(false);

  const theme = createTheme({
    palette: {
      type: modeDark ? "dark" : "light",
      primary: {
        main: '#14B97F'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Switch
        onClick={() => setModeDark(!modeDark)}
      />

      <div className="h-screen text-center p-10 ">
        <div className="container mx-auto h-full ">
          <AppRouter />
        </div>
      </div>


    </ThemeProvider>
  )
}
