import AppRoutes from './AppRoutes';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../assets/theme';

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
