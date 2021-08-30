import { CssBaseline, Switch } from '@material-ui/core'
import { HomeView } from './views/HomeView';
import './App.scss';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useState } from 'react';
// import theme from './ThemeConfig';

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

  console.log('dark: ', modeDark);

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
