import React, { useState } from 'react'
import './App.scss'
import { HomeView } from './views/HomeView';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Switch } from '@material-ui/core'

export const App = () => {

  const [modeDark, setModeDark] = useState(false);

  const theme = createTheme({
    palette: {
      type: modeDark? "dark" : "light",
      primary:{
        main: '#FFCA28'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Switch 
        onClick={() => setModeDark(!modeDark) }
      />

      <div className="container">
        <HomeView />
      </div>
    </ThemeProvider>
  )
}
