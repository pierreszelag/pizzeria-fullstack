import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    title: {
      fontSize: "150px",
      marginTop: "2em"
    }});


export default function Home() {
    const classes = useStyles();
    return (
        <p className={classes.title}>Welcome to the Pizzeria</p>
    );
  }