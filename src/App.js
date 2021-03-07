import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import { Menu } from '@material-ui/icons';


const App = () => {
  return ( 
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Menu />
          <Typography variant="h6">
            Some text
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Where is my text
            </Typography>
            <Typography variant="subtitle" align="center" color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </Typography>

            <div>
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
      </main>
    </>
   );
}
 


export default App;