import './App.css';
import theme from "./theme";
import { ThemeProvider } from '@material-ui/core/styles';
//import Auth from "./pages/auth/Auth";
import Dashboard from "./pages/home/Dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
