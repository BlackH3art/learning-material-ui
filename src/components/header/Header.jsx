import React from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import useStyles from './styles.header';

const Header = () => {

  const classes = useStyles();
  
  return ( 
    <>
      <AppBar position="relative">
        <Toolbar>
          <Menu className={classes.icon} />
          <Typography variant="h6">
            Some text
          </Typography>
        </Toolbar>
      </AppBar>
    </>
   );
}
 
export default Header;