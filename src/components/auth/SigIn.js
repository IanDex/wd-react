import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

export const SignIn = ({setOpen, open, classes, setAction}) => {

  const handleToggle = () => {
    setOpen(!open);
  };
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value});
  };

  const handleClickShowPassword = () => {
    setValues({...values, showPassword: !values.showPassword});
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>Log in</h1>
      <span>Módulo para el manejo de alertas Watchdog</span>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Nombre de Usuario"
          name="email"
          autoComplete="off"
          autoFocus
        />
        <Box m={2}/>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary"/>}
          label="Remember me"
        />
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Button
          type="button"
          fullWidth
          onClick={handleToggle}
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Ingresar
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2" onClick={() => setAction(false)}>
              Recuperar contraseña
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
