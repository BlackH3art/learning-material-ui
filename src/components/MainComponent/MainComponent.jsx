import React from 'react';
import { Typography, Button, Grid, Container} from '@material-ui/core';

import useStyles from './styles.main';


const MainComponent = () => {

  const classes = useStyles();

  return ( 
    <>
      <div>
          <Container className={classes.container} maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Where is my text
            </Typography>
            <Typography variant="subtitle" align="center" color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </Typography>

            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Click me!
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Don't click me!
                  </Button>
                </Grid>
              </Grid>
            </div>

          </Container>
        </div>
    </>
   );
}
 
export default MainComponent;