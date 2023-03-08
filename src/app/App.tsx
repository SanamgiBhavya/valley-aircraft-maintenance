import AppRoutes from './AppRoutes';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1600,
      xl: 1920
    }
  },
  typography: {
    fontFamily: `"Open Sans", "sans-serif"`
  },
  palette: {
    primary: {
      main: '#5E5CE6'
    },

    secondary: {
      main: '#6C757D'
    },
    info: {
      main: '#353535'
    },
    warning: { main: '#FF3B30' }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
