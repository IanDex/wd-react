import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

export const ForgetPassword = ({setOpen, open, classes, setAction}) =>{

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <h1>Recuperar contraseña</h1>
      <span>Ingresa tu correo electrónico para enviarte los pasos a seguir para recuperar tu contraseña.</span>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Correo Electronico"
          name="email"
          autoComplete="off"
          autoFocus
        />

        <Button
          type="button"
          fullWidth
          onClick={handleToggle}
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Recuperar
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2" onClick={() => setAction(true)}>
              Iniciar Sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
