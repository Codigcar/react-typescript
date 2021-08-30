import { CssBaseline } from '@material-ui/core'
// import styles from './App.module.scss';
import { HomeView } from './views/HomeView';
import './App.scss';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

export const App = () => {
  const theme = createTheme({
    palette: {
      type: "dark",
      primary:{
        main: '#FFCA28'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="container">
        <HomeView />
      </div>
    </ThemeProvider>
  )
}
