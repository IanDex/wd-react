import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(1, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? "#ECBB05" : "#ffcd04",
  },
}));

export const Copyright = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        <b>{'Copyright © '}
          {new Date().getFullYear()}</b>
        {' | WatchDog (Real Time Media Watch).'}
      </Typography>
    </footer>
  )
}
