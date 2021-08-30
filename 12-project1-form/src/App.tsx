import { CssBaseline } from '@material-ui/core'
import { HomeView } from './views/HomeView';
import './App.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ThemeConfig';

export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="container">
        <HomeView />
      </div>
    </ThemeProvider>
  )
}
