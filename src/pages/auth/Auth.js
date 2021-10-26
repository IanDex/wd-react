import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import {CircularProgress} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Copyright} from "../../components/Copyright";
import {ForgetPassword} from "../../components/auth/ForgetPassword";
import {SignIn} from "../../components/auth/SigIn";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  div_form: {
    background: "white",
    padding: "0px 20px 20px",
    margin: "30px 10px",
    borderRadius: 8
  },
  paper: {
    minHeight: "calc(100vh - 83px)",
    justifyContent: "center",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Auth() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [action, setAction] = React.useState(true);

  return (
    <div className={classes.root}>
      {
        // TODO BackDrop is displayed throughout the process Ojo con eso manito
      }
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit"/>
      </Backdrop>
      <Container component="main" maxWidth="sm">
        <CssBaseline/>
        <div className={classes.paper}>
          <img width={250} src="https://storage.googleapis.com/recursos_watchdog/logo.png" alt="WD"/>
          <div className={classes.div_form}>
            {action ?
              <SignIn setAction={setAction} setOpen={setOpen} open={open} classes={classes}/> :
              <ForgetPassword setAction={setAction} setOpen={setOpen} open={open} classes={classes}/>
            }
          </div>
        </div>
      </Container>
      <Copyright/>
    </div>
  )
}
