import AppRoutes from './AppRoutes';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../assets/theme';
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
