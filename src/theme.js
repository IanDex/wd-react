import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#ECBB05',
      dark: '#002884',
      contrastText: '#fff',
      backgroundColor: '#000'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    background: {
      default: '#E5E8E8'
    }
  },
});

export default theme;
