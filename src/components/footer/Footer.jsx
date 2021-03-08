import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './styles.footer';


const Footer = () => {

  const classes = useStyles();

  return ( 
    <>
      <footer className={classes.footer}>
        <Typography variant="h5" align="center" gutterBottom> Some text</Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">Something else here</Typography>
      </footer>  
    </>
   );
}
 
export default Footer;